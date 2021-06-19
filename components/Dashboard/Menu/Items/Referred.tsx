import React from "react";
import { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const Referred = () => {
  const {
    user: { referred },
  } = useContext(AuthContext);

  return (
    <div className="referred">
      <h4>Referido por</h4>
      <p>{referred.partner_name}</p>
      <span>10% de descuento en tu primera compra</span>
    </div>
  );
};

export default Referred;
