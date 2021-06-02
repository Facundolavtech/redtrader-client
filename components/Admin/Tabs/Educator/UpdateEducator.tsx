import React, { useContext, useEffect, useState } from "react";
import { InputAdornment, Switch, TextField } from "@material-ui/core";
import { updateEducator } from "../../../../services/admin";
import { Email } from "@material-ui/icons";
import AuthContext from "../../../../context/Auth";
import SubmitButton from "../../../UI/SubmitButton";

const UpdateEducator = () => {
  const initialFormValues = {
    email: "",
  };

  const { token } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [educatorSwitch, setEducatorSwitch] = useState({
    checked: true,
  });

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

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducatorSwitch({ ...educatorSwitch, [e.target.name]: e.target.checked });
  };

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
      active: educatorSwitch.checked,
      email,
      token,
    };

    setProcessingForm(true);

    await updateEducator(data);

    setProcessingForm(false);

    setFormValues(initialFormValues);
  };

  return (
    <>
      <h2 className="admin-tab__title">Añadir/Eliminar un educador</h2>
      <form className="plan__admintab" onSubmit={handleSubmit}>
        <div className="plan__switch">
          <label>Eliminar</label>
          <Switch
            color="primary"
            checked={educatorSwitch.checked}
            onChange={handleSwitchChange}
            name="checked"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Añadir</label>
        </div>
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

export default UpdateEducator;
