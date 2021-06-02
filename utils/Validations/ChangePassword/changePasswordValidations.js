export default function changePasswordValidations(values) {
  let errors = {};

  //Validate new password
  if (!values.new) {
    errors.new = "Este campo es obligatorio";
  }

  //Validate repeat new password
  if (!values.repeatNew) {
    errors.repeatNew = "Este campo es obligatorio";
  }

  return errors;
}
