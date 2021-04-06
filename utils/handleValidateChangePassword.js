import changePasswordValidations from "./changePasswordValidations";

const handleValidateChangePassword = (values, errorState, setErrorStateFn) => {
  let errors;
  errors = changePasswordValidations(values);

  if (Object.keys(errors).length > 0) {
    setErrorStateFn({ ...errorState, errors });
  } else {
    setErrorStateFn(null);
  }
};

export default handleValidateChangePassword;
