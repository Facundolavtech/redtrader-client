import React from "react";
import CouponApplied from "../CouponApplied";
import PartnerDiscount from "../PartnerDiscount";

export const PriceWithDiscount = ({
  first_month_payed,
  price,
  discount,
  partnerDiscount,
  upgrade = false,
}) => {
  const { coupon_name, percent } = discount;

  const calculateDiscount = () => {
    if (partnerDiscount) {
      return price - (price * percent) / 100 - (price * partnerDiscount) / 100;
    } else {
      return price - (price * percent) / 100;
    }
  };

  return (
    <h3>
      <PriceBeforeDiscount price={price} />
      <span>{calculateDiscount().toFixed(2)} U$D</span>{" "}
      {!upgrade ? (first_month_payed ? "/ Mes" : "/ Primer mes") : null}
      <CouponApplied coupon_name={coupon_name} percent={percent} />
      {partnerDiscount && !first_month_payed && <PartnerDiscount />}
    </h3>
  );
};

export const PriceWithoutDiscount = ({
  first_month_payed,
  price,
  upgrade = false,
  partnerDiscount,
}) => {
  if (partnerDiscount && !first_month_payed) {
    price = price - (price * partnerDiscount) / 100;
  }

  return (
    <h3>
      <span>{price.toFixed(2)} U$D</span>{" "}
      {!upgrade ? (first_month_payed ? "/ Mes" : "/ Primer mes") : null}
      {partnerDiscount && !first_month_payed && <PartnerDiscount />}
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
