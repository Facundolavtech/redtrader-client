import authFormValidations from "./authFormValidations";

const handleValidateAuth = (
  values,
  isLoginForm,
  errorState,
  setErrorStateFn
) => {
  let errors;
  errors = authFormValidations(values, isLoginForm);

  if (Object.keys(errors).length > 0) {
    setErrorStateFn({ ...errorState, errors });
  } else {
    setErrorStateFn(null);
  }
};

export default handleValidateAuth;
