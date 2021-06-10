import { SwapHoriz } from "@material-ui/icons";
import React, { useContext } from "react";
import AuthContext from "../../../../../context/Auth";
import LockContent from "../../../LockContent/LockContent";
import LevelTabs from "./LevelsTabs";

const Arbitrage = () => {
  const {
    user: { plan },
  } = useContext(AuthContext);

  if (!plan.active) {
    return <LockContent />;
  } else {
    return (
      <div className="arbitrage__container">
        <div className="title">
          <h2>Academia de Arbitraje</h2>
          <SwapHoriz />
        </div>
        <div className="leveltabs">
          <LevelTabs />
        </div>
      </div>
    );
  }
};

export default Arbitrage;
