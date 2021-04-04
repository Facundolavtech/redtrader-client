import {
  Button,
  FormControl,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { Person, VpnKey, Email } from "@material-ui/icons";
import { useEffect, useState } from "react";
import handleValidateAuth from "../../utils/handleValidateAuth";
import { register, login } from "../../services/auth";
import { useRouter } from "next/router";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
};

export default function AuthForm({ isLoginForm, setIsLoginForm }) {
  const router = useRouter();
  const [processingForm, setProcessingForm] = useState(false);
  const [values, setValues] = useState(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState(null);

  const { name, email, password } = values;

  useEffect(() => {
    values !== initialFormValues &&
      handleValidateAuth(values, isLoginForm, fieldErrors, setFieldErrors);
  }, [values]);

  const handleChangeForm = () => {
    setValues(initialFormValues);
    setFieldErrors(null);
    setIsLoginForm(isLoginForm ? false : true);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidateAuth(values, isLoginForm, fieldErrors, setFieldErrors);
    if (fieldErrors !== null) return;

    try {
      setProcessingForm(true);
      
      const response = isLoginForm
        ? await login(values)
        : await register(values);

      setProcessingForm(false);

      if (response.status === 200) {
        setValues(initialFormValues);
        router.push("/dashboard");
      } else {
        setValues({
          ...values,
          password: "",
        });
      }
    } catch (error) {
      setProcessingForm(false);
      setValues({
        ...values,
        password: "",
      });
    }
  };

  return (
    <>
      <div className="auth-modal__logo">
        <img src="favicon.png" />
      </div>
      <form className="auth__form" onSubmit={handleSubmit}>
        {!isLoginForm && (
          <TextField
            type="text"
            label="Nombre"
            error={fieldErrors && fieldErrors.errors.name ? true : false}
            helperText={fieldErrors && fieldErrors.errors.name}
            name="name"
            value={name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
        )}
        <TextField
          error={fieldErrors && fieldErrors.errors.email ? true : false}
          helperText={fieldErrors && fieldErrors.errors.email}
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={fieldErrors && fieldErrors.errors.password ? true : false}
          helperText={fieldErrors && fieldErrors.errors.password}
          type="password"
          label="Contraseña"
          name="password"
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
        <FormControl fullWidth className="submit__button">
          <Button
            variant="contained"
            color="primary"
            type={processingForm ? "button" : "submit"}
          >
            {processingForm && (
              <CircularProgress style={{ color: "#fff" }} size={23} />
            )}
            {!processingForm && isLoginForm ? "Ingresar" : ""}
            {!processingForm && !isLoginForm ? "Registrarse" : ""}
          </Button>
        </FormControl>
        <button
          onClick={handleChangeForm}
          className="changeForm__button"
          type="button"
        >
          {isLoginForm ? "¿Aun no tienes cuenta?" : "¿Ya tienes cuenta?"}
          {isLoginForm ? <span>Registrate</span> : <span>Inicia Sesion</span>}
        </button>
      </form>
    </>
  );
}
