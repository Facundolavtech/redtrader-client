import React from "react";
import { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const Referred = () => {
  const {
    user: {
      data: { referred, first_month_payed },
    },
  } = useContext(AuthContext);

  return (
    <>
      {referred && !first_month_payed && referred.special_discount !== 0 && (
        <div className="referred">
          <h4>Referido por</h4>
          <p>{referred.partner_name}</p>
          <span>
            {referred.special_discount}% de descuento en tu primera compra
          </span>
        </div>
      )}
    </>
  );
};

export default Referred;
