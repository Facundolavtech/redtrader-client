import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../components/UI/Logo/Logo";
import { toast } from "react-toastify";
import { TextField, InputAdornment } from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import SubmitButton from "../../components/UI/SubmitButton";
import handleValidate from "../../utils/handleValidate";
import resetPasswordValidations from "../../utils/Validations/ResetPassword/resetPasswordValidations";
import { resetPassword } from "../../services/resetPassword";
import SEO from "../../components/SEO";

const initialFormValues = {
  password: "",
  confirm: "",
};

export default function index() {
  const router = useRouter();
  const { id, token } = router.query;
  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const { password, confirm } = formValues;

  useEffect(() => {
    if (formValues !== initialFormValues) {
      handleValidate(
        formValues,
        resetPasswordValidations,
        fieldErrors,
        setFieldErrors
      );
    }
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
      resetPasswordValidations,
      fieldErrors,
      setFieldErrors
    );

    if (fieldErrors !== null || formValues === initialFormValues) {
      return;
    }

    if (confirm !== password) {
      toast.error("Las contraseñas no coinciden");
      setFormValues(initialFormValues);
      return;
    }

    setProcessingForm(true);
    await resetPassword(id, token, password);
    router.push("/");
  };

  return (
    <>
      <SEO title="Restablecer contraseña" />

      <div className="resetpassword__container">
        <Logo href="/" />
        <form onSubmit={handleSubmit}>
          <TextField
            error={fieldErrors && fieldErrors.errors.password ? true : false}
            helperText={fieldErrors && fieldErrors.errors.password}
            type="password"
            name="password"
            label="Contraseña"
            value={password}
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
            error={fieldErrors && fieldErrors.errors.confirm ? true : false}
            helperText={fieldErrors && fieldErrors.errors.confirm}
            type="password"
            name="confirm"
            label="Confirmar contraseña"
            value={confirm}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton loading={processingForm} buttonText="Enviar" />
        </form>
      </div>
    </>
  );
}
