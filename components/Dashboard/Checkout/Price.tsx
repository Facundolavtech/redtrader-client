import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";

const Price = () => {
  const { user } = useContext(AuthContext);
  const { price } = useSelector((state: any) => state.checkout);

  if (user.discount.active) {
    return <WithDiscount price={price} />;
  } else {
    return <h2 className="price">{price},0 U$D</h2>;
  }
};

export default Price;

const WithDiscount = ({ price }) => {
  const {
    user: { discount },
  } = useContext(AuthContext);

  const priceWithDiscount = price - (price * discount.percent) / 100;

  return (
    <div className="with__discount">
      <h2 className="price-before__discount">{price},0 U$D</h2>
      <h2 className="price-with__discount">
        {priceWithDiscount.toFixed(2)},0 U$D
      </h2>
    </div>
  );
};
