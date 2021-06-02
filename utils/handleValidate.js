const handleValidate = (
  formValues,
  validationFunction,
  errorState,
  setErrorStateFn,
  ...other
) => {
  let errors;
  errors = validationFunction(formValues, ...other);

  if (Object.keys(errors).length > 0) {
    setErrorStateFn({ ...errorState, errors });
  } else {
    setErrorStateFn(null);
  }
};

export default handleValidate;
