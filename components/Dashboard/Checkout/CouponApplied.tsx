import React from "react";

const CouponApplied = ({ coupon_name, percent }) => {
  return (
    <h4 className="coupon__name">
      <span>Cupon: </span> {coupon_name} <span>{percent}% de descuento</span>
    </h4>
  );
};

export default CouponApplied;
