import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";

const CouponApplied = () => {
  const {
    user: {
      discount: { coupon_name, percent },
    },
  } = useContext(AuthContext);

  return (
    <div className="coupon__applied">
      <span className="coupon__name">
        Cupon &#10003; <strong>{coupon_name}</strong>
      </span>
      <span className="percent">-{percent}%</span>
    </div>
  );
};

export default CouponApplied;
