import React, { useEffect, useState } from "react";
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
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Plan = () => {
  const initialFormValues = {
    email: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [planSwitch, setPlanSwitch] = useState({
    checked: true,
  });
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

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

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlanSwitch({ ...planSwitch, [event.target.name]: event.target.checked });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <form className="plan__admintab">
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="Selecciona la fecha de caducidad del plan"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      )}
      <Button
        className="submit__btn"
        color="primary"
        variant="contained"
        type={processingForm ? "button" : "submit"}
      >
        {processingForm ? (
          <CircularProgress style={{ color: "#fff" }} size={23} />
        ) : (
          "Enviar"
        )}
      </Button>
    </form>
  );
};

export default Plan;
