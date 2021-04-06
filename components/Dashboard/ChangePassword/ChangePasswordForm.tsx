import React, { useState, useEffect } from "react";
import { updateUser } from "../../../services/user";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import handleValidateChangePassword from "../../../utils/handleValidateChangePassword";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const initialFormValues = {
  old: "",
  new: "",
  repeatNew: "",
};
export default function ChangePasswordForm({ userId, token }) {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);

  useEffect(() => {
    formValues !== initialFormValues &&
      handleValidateChangePassword(formValues, fieldErrors, setFieldErrors);
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidateChangePassword(formValues, fieldErrors, setFieldErrors);
    if (fieldErrors !== null || formValues === initialFormValues) return;

    if (formValues.new !== formValues.repeatNew) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    try {
      setProcessingForm(true);
      const response = await updateUser(
        userId,
        { password: formValues.new },
        token
      );

      if (response.status === 200) {
        toast.success("Contraseña actualizada");
        router.push("/dashboard");
      }
    } catch (error) {
      setProcessingForm(false);
      toast.error("Ocurrio un error");
      setFormValues(initialFormValues);
    }
  };

  return (
    <div className="changepassword__form">
      <div className="changepassword__form-title">
        <h2>Cambiar contraseña</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          error={fieldErrors && fieldErrors.errors.old ? true : false}
          helperText={fieldErrors && fieldErrors.errors.old}
          type="password"
          label="Contraseña actual"
          name="old"
          value={formValues.old}
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
