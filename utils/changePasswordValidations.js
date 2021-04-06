export default function changePasswordValidations(values) {
  let errors = {};

  //Validate old password
  if (!values.old) {
    errors.old = "Este campo es obligatorio";
  }

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
