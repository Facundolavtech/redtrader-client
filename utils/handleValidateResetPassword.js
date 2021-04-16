import resetPasswordValidations from "./resetPasswordValidations";

const handleValidateResetPassword = (values, errorState, setErrorStateFn) => {
  let errors;
  errors = resetPasswordValidations(values);

  if (Object.keys(errors).length > 0) {
    setErrorStateFn({ ...errorState, errors });
  } else {
    setErrorStateFn(null);
  }
};

export default handleValidateResetPassword;
