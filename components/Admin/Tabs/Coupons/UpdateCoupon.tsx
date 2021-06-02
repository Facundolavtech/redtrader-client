import React, { useContext, useEffect, useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { createCoupon } from "../../../../services/coupon";
import { LocalOffer } from "@material-ui/icons";
import CouponsList from "./CouponsList";
import SubmitButton from "../../../UI/SubmitButton";
import AuthContext from "../../../../context/Auth";
import { useDispatch } from "react-redux";
import { getCouponsAction } from "../../../../redux/actions/Admin/Coupons";

const UpdateCoupon = () => {
  const initialFormValues = {
    name: "",
    percent: 0,
  };

  const dispatch = useDispatch();

  const { token } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);

  const { name, percent } = formValues;

  useEffect(() => {
    if (name !== initialFormValues.name) {
      if (name.length < 6) {
        setFieldErrors({
          name: "El nombre del cupon debe ser mayor a 6 caracteres",
        });
      } else if (percent < 1 || percent > 99) {
        setFieldErrors({
          percent: "El porcentaje debe estar entre 1 y 99",
        });
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

    if (name === "" || !percent || formValues === initialFormValues) return;

    const data = {
      name: name.toUpperCase().replace(" ", ""),
      percent,
      token,
    };

    setProcessingForm(true);

    const response = await createCoupon(data);

    if (response === 200) {
      dispatch(getCouponsAction(token));
      setFormValues(initialFormValues);
    }

    setProcessingForm(false);
  };

  return (
    <>
      <h2 className="admin-tab__title">Crear/Eliminar cupones de descuento</h2>
      <div className="coupon-tabs__container">
        <form className="coupon__admintab" onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Nombre del cupon"
            name="name"
            variant="outlined"
            error={fieldErrors && fieldErrors.name ? true : false}
            helperText={fieldErrors && fieldErrors.name}
            value={name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalOffer />
                </InputAdornment>
              ),
            }}
          />
          <input
            type="number"
            value={percent}
            name="percent"
            onChange={handleChange}
            min="1"
            max="99"
            placeholder="Ingrese porcentaje de descuento del cupon"
          />
          <SubmitButton loading={processingForm} buttonText="Enviar" />
        </form>
        <CouponsList />
      </div>
    </>
  );
};

export default UpdateCoupon;
