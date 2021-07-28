import React, { useContext, useEffect, useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  CircularProgress,
  InputAdornment,
  Switch,
  TextField,
} from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { es } from "date-fns/locale";
import { updatePlanAdmin } from "../../../../services/admin";
import AuthContext from "../../../../context/Auth";
import SubmitButton from "../../../UI/SubmitButton";

const Plan = () => {
  const initialFormValues = {
    email: "",
  };

  const { token } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [planSwitch, setPlanSwitch] = useState({
    checked: true,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openPicker, setOpenPicker] = useState(false);

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

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanSwitch({ ...planSwitch, [e.target.name]: e.target.checked });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || formValues === initialFormValues) return;

    const data = {
      active: planSwitch.checked,
      email,
      token,
      expireDate: new Date(selectedDate).getTime(),
    };

    setProcessingForm(true);

    await updatePlanAdmin(data);

    setProcessingForm(false);
    setFormValues(initialFormValues);
  };

  return (
    <>
      <h2 className="admin-tab__title">Activar/Desactivar plan</h2>
      <form className="plan__admintab" onSubmit={handleSubmit}>
        <div className="plan__switch">
          <label>Desactivar</label>
          <Switch
            color="primary"
            checked={planSwitch.checked}
            onChange={handleSwitchChange}
            name="checked"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Activar</label>
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
        {planSwitch.checked && (
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <DatePicker
              open={openPicker}
              onOpen={() => setOpenPicker(true)}
              onClose={() => setOpenPicker(false)}
              className="plan__datepicker"
              minDate={new Date()}
              id="date-picker-dialog"
              label="Selecciona la fecha de caducidad del plan"
              format="dd/MM/yyyy"
              minDateMessage="La fecha de caducidad no puede ser menor que la fecha actual"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        )}
        <SubmitButton loading={processingForm} buttonText="Enviar" />
      </form>
    </>
  );
};

export default Plan;
