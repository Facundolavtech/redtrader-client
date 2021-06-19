import { SwapHoriz, TrendingUp } from "@material-ui/icons";
import React, { useContext } from "react";
import AuthContext from "../../../../../context/Auth";
import LockContent from "../../../LockContent/LockContent";
import TabTitle from "../../TabTitle";
import LevelTabs from "./LevelsTabs";

const Arbitrage = () => {
  const {
    user: { plan },
  } = useContext(AuthContext);

  const {
    active,
    plan_type: { premium_plus },
  } = plan;

  if (!active) {
    return <LockContent />;
  }
  if (!premium_plus) {
    return <LockContent premium_plus />;
  } else {
    return (
      <>
        <TabTitle name="Academia de Arbitraje" icon={<TrendingUp />} />
        <div className="arbitrage__container">
          <div className="leveltabs">
            <LevelTabs />
          </div>
        </div>
      </>
    );
  }
};

export default Arbitrage;
