import { FormControl, TextField, InputAdornment } from "@material-ui/core";
import { Person, VpnKey, Email } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { register, login } from "../../services/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import SubmitButton from "../UI/SubmitButton";
import handleAuthFormsAction from "../../redux/actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import handleAuthModalAction from "../../redux/actions/Modal";
import handleValidate from "../../utils/handleValidate";
import authFormValidations from "../../utils/Validations/Auth/authFormValidations";

export default function Forms() {
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const router = useRouter();
  const [processingForm, setProcessingForm] = useState(false);
  const [values, setValues] = useState(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState(null);
  const dispatch = useDispatch();
  const signInForm = useSelector((state: any) => state.auth.signInForm);

  const handleAuthForms = (payload) => {
    dispatch(handleAuthFormsAction(payload));
  };

  const { name, email, password } = values;

  useEffect(() => {
    if (values !== initialFormValues)
      handleValidate(
        values,
        authFormValidations,
        fieldErrors,
        setFieldErrors,
        signInForm
      );
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
      signInForm
    );
    if (fieldErrors !== null || values === initialFormValues) {
      return;
    }

    setProcessingForm(true);

    const response = signInForm ? await login(values) : await register(values);

    if (response === 200) {
      dispatch(handleAuthModalAction());
      router.push("/dashboard");
    } else {
      setValues({ ...values, password: "" });
      setProcessingForm(false);
    }
  };

  return (
    <>
      <div className="auth-modal__logo">
        <img src="/assets/img/logo.png" />
      </div>
      <form className="auth__form" onSubmit={handleSubmit}>
        {!signInForm && (
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
          <SubmitButton
            loading={processingForm}
            buttonText={signInForm ? "Ingresar" : "Registrarse"}
          />
        </FormControl>
        {signInForm && (
          <Link href="/forgot">
            <a className="forgot__btn">¿Olvidaste tu contraseña?</a>
          </Link>
        )}
        <SwitchFormsButton
          signInForm={signInForm}
          handleFormFunction={handleAuthForms}
          setValues={setValues}
          initialFormValues={initialFormValues}
        />
      </form>
    </>
  );
}

const SwitchFormsButton = ({
  signInForm,
  handleFormFunction,
  setValues,
  initialFormValues,
}) => {
  return (
    <button
      onClick={() => {
        signInForm ? handleFormFunction(false) : handleFormFunction(true),
          setValues(initialFormValues);
      }}
      className="changeForm__button"
      type="button"
    >
      {signInForm ? "¿Aún no tienes cuenta?" : "¿Ya tienes cuenta?"}
      {signInForm ? <span>Registrate</span> : <span>Inicia Sesion</span>}
    </button>
  );
};
