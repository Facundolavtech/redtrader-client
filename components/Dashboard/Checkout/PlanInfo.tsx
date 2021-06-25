import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";

const PlanInfo = () => {
  const { user } = useContext(AuthContext);

  const { plan_name } = useSelector((state: any) => state.checkout);

  return (
    <>
      <h2 className="plan__name">{plan_name}</h2>
      <h3 className="account">
        Cuenta: <strong>{user.data.email}</strong>
      </h3>
    </>
  );
};

export default PlanInfo;
