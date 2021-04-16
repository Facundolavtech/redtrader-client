import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { sendResetPasswordEmail } from "../../services/user";
import { toast } from "react-toastify";

const initialFormValues = "";

const ForgotPasswordForm = () => {
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: null,
  });
  const [emailValue, setEmailValue] = useState(initialFormValues);
  const [emailSend, setEmailSend] = useState(false);

  const handleValidateEmail = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)) {
      setFieldErrors({
        ...fieldErrors,
        email: "Formato invalido",
      });
    } else {
      setFieldErrors({ email: null });
    }
  };

  useEffect(() => {
    if (emailValue !== initialFormValues) {
      handleValidateEmail();
    } else {
      setFieldErrors({ email: null });
    }
  }, [emailValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidateEmail();
    if (emailValue === initialFormValues || fieldErrors.email !== null) {
      return;
    }
    try {
      setProcessingForm(true);

      const response = await sendResetPasswordEmail(emailValue);

      if (response.status === 200) {
        toast.success(response.msg);
        setEmailSend(true);
        setProcessingForm(false);
      } else {
        setProcessingForm(false);
        toast.error(response);
        setEmailValue("");
      }
    } catch (error) {
      toast.error("Ocurrio un error");
      setProcessingForm(false);
    }
  };

  return (
    <>
      {emailSend ? (
        <div className="emailsend__container">
          <h2>
            Te hemos enviado las instrucciones para reestablecer tu contraseña
            al siguiente correo: <span>{emailValue}</span>, revisa tu casilla y
            sigue los pasos
          </h2>
        </div>
      ) : (
        <>
          <div className="forgotpw__container">
            <h2>¿Olvidaste tu contraseña?</h2>
            <p>Recuperala aquí ingresando tu email</p>
          </div>
          <form onSubmit={handleSubmit} className="forgotpw__form">
            <TextField
              error={fieldErrors && fieldErrors.email ? true : false}
              helperText={fieldErrors && fieldErrors.email}
              type="email"
              label="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type={processingForm ? "button" : "submit"}
            >
              {processingForm ? (
                <CircularProgress style={{ color: "#fff" }} size={23} />
              ) : (
                "Enviar"
              )}
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default ForgotPasswordForm;
