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

  if (plan.type !== "premium_plus") {
    return <LockContent plan_name="Premium Plus" />;
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
