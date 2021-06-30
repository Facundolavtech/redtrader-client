import {
  FormControl,
  TextField,
  InputAdornment,
  Grid,
  Container,
} from "@material-ui/core";
import { Person, VpnKey, Email } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { register, login } from "../../services/auth";
import { useRouter } from "next/router";
import SubmitButton from "../UI/SubmitButton";
import handleValidate from "../../utils/handleValidate";
import authFormValidations from "../../utils/Validations/Auth/authFormValidations";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/Auth";

export default function AuthForms({ isSignIn }) {
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const router = useRouter();
  const { authUser } = useContext(AuthContext);
  const [processingForm, setProcessingForm] = useState(false);
  const [values, setValues] = useState(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState(null);

  const { name, email, password } = values;

  useEffect(() => {
    if (values !== initialFormValues)
      handleValidate(values, authFormValidations, fieldErrors, setFieldErrors);
  }, [values]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidate(
      values,
      authFormValidations,
      fieldErrors,
      setFieldErrors,
      isSignIn
    );
    if (fieldErrors !== null || values === initialFormValues) {
      return;
    }

    setProcessingForm(true);

    const response = isSignIn ? await login(values) : await register(values);

    if (response === 200) {
      isSignIn ? router.push("/dashboard") : router.push("/confirm");
      !isSignIn && authUser();
    } else {
      setValues({ ...values, password: "" });
      setProcessingForm(false);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className="auth__container">
          <Grid item md={12} xs={12}>
            <form className="auth__form" onSubmit={handleSubmit}>
              <div className="auth__form-img">
                <img src="/assets/img/logo.png" alt="redtrader logo" />
              </div>
              {!isSignIn && (
                <TextField
                  variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
                error={
                  fieldErrors && fieldErrors.errors.password ? true : false
                }
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
                <SubmitButton
                  loading={processingForm}
                  buttonText={isSignIn ? "Ingresar" : "Registrarse"}
                />
              </FormControl>
              {isSignIn && (
                <Link href="/forgot">
                  <a className="forgot__btn">¿Olvidaste tu contraseña?</a>
                </Link>
              )}
              <button
                onClick={() => {
                  isSignIn ? router.push("/signup") : router.push("signin");
                }}
                className="changeForm__button"
                type="button"
              >
                {isSignIn ? (
                  <>
                    {"¿No tienes cuenta?"} <span>Registrarse</span>
                  </>
                ) : (
                  <>
                    {"¿Ya tienes cuenta?"} <span>Iniciar sesion</span>
                  </>
                )}
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
