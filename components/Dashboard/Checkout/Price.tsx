import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";

const Price = () => {
  const { user } = useContext(AuthContext);
  const { price } = useSelector((state: any) => state.checkout);

  const { referred, first_month_payed } = user.data;

  if (user.data.coupon || (user.data.referred && !first_month_payed)) {
    return (
      <WithDiscount
        price={price}
        special_discount={
          referred && !first_month_payed ? referred.special_discount : null
        }
      />
    );
  } else {
    return <h2 className="price">{price},0 U$D</h2>;
  }
};

export default Price;

const WithDiscount = ({ price, special_discount }) => {
  const {
    user: {
      data: { coupon },
    },
  } = useContext(AuthContext);

  const coupon_discount = coupon ? coupon.discount : 0;

  const total = CalculateDiscount(price, special_discount, coupon_discount);

  return (
    <div className="with__discount">
      <h2 className="price-before__discount">{price},0 U$D</h2>
      <h2 className="price-with__discount">{total.toFixed(2)},0 U$D</h2>
    </div>
  );
};

const CalculateDiscount = (price, special_discount, coupon_discount) => {
  let total;

  if (special_discount) {
    let totalDiscount = special_discount + coupon_discount;

    if (totalDiscount > 99) totalDiscount = 99;
    total = price - (price * totalDiscount) / 100;
  } else {
    if (coupon_discount > 99) coupon_discount = 99;
    total = price - (price * coupon_discount) / 100;
  }

  return total;
};
