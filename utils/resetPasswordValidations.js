export default function resetPasswordValidations(values) {
  let errors = {};

  if (!values.password) {
    errors.password = "Este campo es obligatorio";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe ser mayor a 6 caracteres";
  }

  if (!values.confirm) {
    errors.confirm = "Este campo es obligatorio";
  }

  return errors;
}
