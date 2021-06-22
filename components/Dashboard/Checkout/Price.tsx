import React from "react";
import { useSelector } from "react-redux";

const Price = () => {
  const { price } = useSelector((state: any) => state.checkout);

  return <h2 className="price">{price},00 U$D</h2>;
};

export default Price;
