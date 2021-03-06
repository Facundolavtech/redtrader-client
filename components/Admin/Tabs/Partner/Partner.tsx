import React, { useContext, useEffect, useState } from "react";
import { InputAdornment, Switch, TextField } from "@material-ui/core";
import { updatePartner } from "../../../../services/admin";
import { Email } from "@material-ui/icons";
import AuthContext from "../../../../context/Auth";
import SubmitButton from "../../../UI/SubmitButton";
import PartnerList from "./PartnerList";
import { getAllPartners } from "../../../../services/partners";

const UpdatePartner = () => {
  const initialFormValues = {
    email: "",
    discount: 0,
  };

  const { token } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [partnerSwitch, setPartnerSwitch] = useState({
    checked: true,
  });
  const [partners, setPartners] = useState(null);

  const { email, discount } = formValues;

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
    setPartnerSwitch({ ...partnerSwitch, [e.target.name]: e.target.checked });
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
      email,
      special_discount: discount,
      active: partnerSwitch.checked,
      token,
    };

    setProcessingForm(true);

    await updatePartner(data);

    setProcessingForm(false);
    setFormValues(initialFormValues);

    getPartners();
  };

  const getPartners = async () => {
    const response: any = await getAllPartners(token);

    if (response.status === 200) {
      setPartners(response.partners);
      setFormValues(initialFormValues);
    }
  };

  return (
    <>
      <h2 className="admin-tab__title">A??adir/Eliminar un partner</h2>
      <div className="partner-tab__container">
        <form onSubmit={handleSubmit}>
          <div className="partner-tab__switch">
            <label>Eliminar</label>
            <Switch
              color="primary"
              checked={partnerSwitch.checked}
              onChange={handleSwitchChange}
              name="checked"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <label>A??adir</label>
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
          {partnerSwitch.checked && (
            <>
              <label className="special__discount-input">
                Descuento especial por referido (Opcional)
              </label>
              <input
                type="number"
                value={discount}
                name="discount"
                onChange={handleChange}
                max="99"
              />
            </>
          )}
          <SubmitButton loading={processingForm} buttonText="Enviar" />
        </form>
        <PartnerList partners={partners} getPartners={getPartners} />
      </div>
    </>
  );
};

export default UpdatePartner;
