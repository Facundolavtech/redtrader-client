import React, { useState, useEffect, useContext } from "react";
import { changePassword } from "../../../services/user";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ArrowBackBtn from "../../BackArrow";
import handleValidate from "../../../utils/handleValidate";
import changePasswordValidations from "../../../utils/Validations/ChangePassword/changePasswordValidations";
import AuthContext from "../../../context/Auth";

const initialFormValues = {
  new: "",
  repeatNew: "",
};

export default function ChangePasswordForm() {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    formValues !== initialFormValues &&
      handleValidate(
        formValues,
        changePasswordValidations,
        fieldErrors,
        setFieldErrors
      );
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidate(
      formValues,
      changePasswordValidations,
      fieldErrors,
      setFieldErrors
    );
    if (fieldErrors !== null || formValues === initialFormValues) return;

    if (formValues.new !== formValues.repeatNew) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    setProcessingForm(true);
    const data = { token, password: formValues.new, email: user.data.email };
    const response = await changePassword(data);

    if (response === 200) {
      router.push("/dashboard");
    } else {
      setProcessingForm(true);
      setFormValues(initialFormValues);
    }
  };

  return (
    <div className="changepassword__form">
      <div className="changepassword__form-title">
        <h2>Cambiar contraseña</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <ArrowBackBtn src="/dashboard" />
        <TextField
          error={fieldErrors && fieldErrors.errors.new ? true : false}
          helperText={fieldErrors && fieldErrors.errors.new}
          type="password"
          label="Nueva contraseña"
          name="new"
          value={formValues.new}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={fieldErrors && fieldErrors.errors.repeatNew ? true : false}
          helperText={fieldErrors && fieldErrors.errors.repeatNew}
          type="password"
          label="Repetir nueva contraseña"
          name="repeatNew"
          value={formValues.repeatNew}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type={processingForm ? "button" : "submit"}
          variant="contained"
          color="primary"
        >
          {processingForm ? (
            <CircularProgress style={{ color: "#fff" }} size={23} />
          ) : (
            "Enviar"
          )}
        </Button>
      </form>
    </div>
  );
}
