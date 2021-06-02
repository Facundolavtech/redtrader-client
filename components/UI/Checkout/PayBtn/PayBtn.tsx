import React from "react";
import { useSelector } from "react-redux";

const PayBtn = () => {
  const { checkout_link } = useSelector((state: any) => state.checkout);

  return (
    <>
      <p className="pay__btn-title">
        Paga tu factura clickeando el siguiente boton
      </p>
      <a href={checkout_link} target="_blank" className="pay__btn-img">
        <img src="/assets/img/coinpayments-paybtn.png" />
      </a>
    </>
  );
};

export default PayBtn;
