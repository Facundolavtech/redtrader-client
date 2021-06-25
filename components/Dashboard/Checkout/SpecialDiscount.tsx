import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";

const SpecialDiscount = () => {
  const {
    user: {
      data: { referred },
    },
  } = useContext(AuthContext);

  return (
    <div className="coupon__applied">
      <span className="coupon__name">
        Descuento especial por referido &#10003;
      </span>
      <span className="percent">-{referred.special_discount}%</span>
    </div>
  );
};

export default SpecialDiscount;
