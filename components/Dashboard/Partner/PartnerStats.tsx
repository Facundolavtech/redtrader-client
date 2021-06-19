import { HowToReg, PersonAdd } from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";

const PartnerStats = () => {
  const {
    user: { partner_stats },
  } = useContext(AuthContext);

  return (
    <div className="partner__stats">
      <div className="registers">
        <PersonAdd />
        <span>
          Registrados <strong>{partner_stats.registers}</strong>
        </span>
      </div>
      <div className="pays">
        <HowToReg />
        <span>
          Pagaron <strong>{partner_stats.pays}</strong>
        </span>
      </div>
    </div>
  );
};

export default PartnerStats;
