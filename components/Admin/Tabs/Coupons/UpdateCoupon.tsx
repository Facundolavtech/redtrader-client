import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { createCoupon } from "../../../../services/coupon";
import { LocalOffer } from "@material-ui/icons";
import { toast } from "react-toastify";
import CouponsList from "./CouponsList";

const UpdateCoupon = ({ id, token }) => {
  const initialFormValues = {
    name: "",
    percent: null,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [processingForm, setProcessingForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [getCoupons, setGetCoupons] = useState(false);

  const { name, percent } = formValues;

  useEffect(() => {
    if (name !== initialFormValues.name) {
      if (name.length < 6) {
        setFieldErrors({
          name: "El nombre del cupon debe ser mayor a 6 caracteres",
        });
      } else if (percent < 0 || percent > 100) {
        setFieldErrors({
          percent: "El porcentaje debe estar entre 0 y 100",
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
      id,
    };

    setProcessingForm(true);

    try {
      const response = await createCoupon(data);

      if (response.status === 200) {
        toast.success(response.msg);
        setProcessingForm(false);
        setFormValues(initialFormValues);
        setGetCoupons(!getCoupons);
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
          min="0"
          max="100"
          placeholder="Ingrese porcentaje de descuento del cupon"
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
      <CouponsList token={token} getCoupons={getCoupons} id={id} />
    </div>
  );
};

export default UpdateCoupon;
