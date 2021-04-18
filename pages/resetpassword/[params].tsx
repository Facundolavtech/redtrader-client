import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../components/Header/Logo";
import { resetPassword } from "../../services/user";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import handleValidateResetPassword from "../../utils/handleValidateResetPassword";

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
      handleValidateResetPassword(formValues, fieldErrors, setFieldErrors);
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

    handleValidateResetPassword(formValues, fieldErrors, setFieldErrors);
    if (fieldErrors !== null || formValues === initialFormValues) {
      return;
    }

    if (confirm !== password) {
      toast.error("Las contraseñas no coinciden");
      setFormValues(initialFormValues);
      return;
    }

    try {
      setProcessingForm(true);
      const response = await resetPassword(id, token, password);

      if (response.status === 200) {
        setProcessingForm(false);
        toast.success(response.msg);
        setFormValues(initialFormValues);
        router.push("/");
      } else {
        setProcessingForm(false);
        toast.error(response);
        response.msg ? toast.error(response.msg) : null;
        router.push("/");
      }
    } catch (error) {
      toast.error("Ocurrio un error");
      setProcessingForm(false);
      setFormValues(initialFormValues);
      return;
    }
  };

  return (
    <div className="resetpassword__container">
      <Logo classes="" />
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
    </div>
  );
}
