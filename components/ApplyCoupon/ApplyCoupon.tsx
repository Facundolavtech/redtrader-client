import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { applyCoupon } from "../../services/coupon";
import { useRouter } from "next/router";

const ApplyCoupon = ({ userToken }) => {
  const router = useRouter();
  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(false);

  const applyCouponFunction = async () => {
    if (couponName.trim() === "") {
      return;
    }

    setLoading(true);

    const response = await applyCoupon(userToken, couponName);

    if (response.status === 200) {
      toast.success(response.msg);
      setCouponName("");
      setLoading(false);
      router.reload();
    } else {
      toast.error(response);
      setCouponName("");
      setLoading(false);
    }
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
