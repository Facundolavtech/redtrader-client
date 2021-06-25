import { HowToReg, PersonAdd } from "@material-ui/icons";
import React from "react";

const PartnerStats = ({ partner }) => {
  const { stats } = partner;

  return (
    <>
      <div className="partner__stats">
        <div className="registers">
          <PersonAdd />
          <span>
            Registrados <strong>{stats.registers}</strong>
          </span>
        </div>
        <div className="pays">
          <HowToReg />
          <span>
            Pagaron <strong>{stats.pays}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default PartnerStats;
