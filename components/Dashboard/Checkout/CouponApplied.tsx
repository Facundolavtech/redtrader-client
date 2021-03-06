import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";

const CouponApplied = () => {
  const {
    user: {
      data: { coupon },
    },
  } = useContext(AuthContext);

  return (
    <div className="coupon__applied">
      <span className="coupon__name">
        Cupon &#10003; <strong>{coupon.name}</strong>
      </span>
      <span className="percent">-{coupon.discount}%</span>
    </div>
  );
};

export default CouponApplied;
