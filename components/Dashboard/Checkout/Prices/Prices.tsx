import React from "react";
import CouponApplied from "../CouponApplied";

export const PriceWithDiscount = ({
  first_month_payed,
  price,
  discount,
  upgrade = false,
}) => {
  const { coupon_name, percent } = discount;

  const calculateDiscount = () => {
    return price - (price * percent) / 100;
  };

  return (
    <h3>
      <PriceBeforeDiscount price={price} />
      <span>{calculateDiscount().toFixed(2)} U$D</span>{" "}
      {!upgrade ? (first_month_payed ? "/ Mes" : "/ Primer mes") : null}
      <CouponApplied coupon_name={coupon_name} percent={percent} />
    </h3>
  );
};

export const PriceWithoutDiscount = ({
  first_month_payed,
  price,
  upgrade = false,
}) => {
  return (
    <h3>
      <span>{price.toFixed(2)} U$D</span>{" "}
      {!upgrade ? (first_month_payed ? "/ Mes" : "/ Primer mes") : null}
    </h3>
  );
};

const PriceBeforeDiscount = ({ price }) => {
  return (
    <span
      style={{
        textDecoration: "line-through",
        color: "#8a8a8a",
        marginRight: "15px",
        fontSize: "1.5em",
        fontWeight: "lighter",
      }}
    >
      {price} U$D
    </span>
  );
};
