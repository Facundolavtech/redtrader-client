import React, { useContext, useEffect, useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { deleteAccount } from "../../../../services/admin";
import { Email } from "@material-ui/icons";
import AuthContext from "../../../../context/Auth";
import SubmitButton from "../../../UI/SubmitButton";

const DeleteAccount = () => {
  const initialFormValues = {
    email: "",
  };

  const { token } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);

  const { email } = formValues;

  useEffect(() => {
    if (email !== initialFormValues.email) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setFieldErrors({ email: "Formato invalido" });
      } else {
        setFieldErrors(null);
      }
    }
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || formValues === initialFormValues) return;

    const data = {
      email,
      token,
    };

    setProcessingForm(true);

    await deleteAccount(data);

    setProcessingForm(false);
  };

  return (
    <>
      <h2 className="admin-tab__title">Borrar una cuenta</h2>
      <form className="plan__admintab" onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          name="email"
          variant="outlined"
          error={fieldErrors && fieldErrors.email ? true : false}
          helperText={fieldErrors && fieldErrors.email}
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
        <SubmitButton loading={processingForm} buttonText="Enviar" />
      </form>
    </>
  );
};

export default DeleteAccount;
