import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { applyCoupon } from "../../services/coupon";
import { useRouter } from "next/router";
import AuthContext from "../../context/Auth";

const ApplyCoupon = () => {
  const router = useRouter();
  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useContext(AuthContext);

  const applyCouponFunction = async () => {
    if (couponName.trim() === "") {
      return;
    }

    setLoading(true);

    const response = await applyCoupon(token, couponName);

    if (response === 200) {
      router.reload();
    } else {
      setCouponName("");
    }
    setLoading(false);
  };

  return (
    <div className="apply-coupon__container">
      <div>
        <h3>¿Tienes un cupon de descuento? Ingresalo aquí</h3>
      </div>
      <div className="apply-coupon__form">
        <TextField
          type="text"
          label="Nombre del cupon"
          value={couponName}
          onChange={(e) => setCouponName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={applyCouponFunction}
        >
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} size={23} />
          ) : (
            "Aplicar cupon"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
