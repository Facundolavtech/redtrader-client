import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  InputAdornment,
  Switch,
  TextField,
} from "@material-ui/core";
import { deleteAccount } from "../../../../services/admin";
import { Email } from "@material-ui/icons";
import { toast } from "react-toastify";

const DeleteAccount = ({ id }) => {
  const initialFormValues = {
    email: "",
  };

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

    console.log(email);

    if (email === "" || formValues === initialFormValues) return;

    const data = {
      email,
      id,
    };

    setProcessingForm(true);

    try {
      const response = await deleteAccount(data);

      if (response.status === 200) {
        toast.success(response.msg);
        setProcessingForm(false);
        setFormValues(initialFormValues);
      } else {
        toast.error(response);
        setProcessingForm(false);
        setFormValues(initialFormValues);
      }
    } catch (error) {
      setProcessingForm(false);
      toast.error("Ocurrio un error");
    }
  };

  return (
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

export default DeleteAccount;
