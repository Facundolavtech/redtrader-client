import { Button } from "@material-ui/core";
import { Add, Info } from "@material-ui/icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/Auth";

const User = () => {
  const {
    user: { plan },
  } = useContext(AuthContext);

  return <>{plan.active ? <WithPlan /> : <WithoutPlan />}</>;
};

const WithoutPlan = () => {
  return (
    <>
      <Link href="/dashboard/checkout">
        <Button className="dashboard__menu-adquire__plan-btn">
          Adquirir plan <Add />
        </Button>
      </Link>
    </>
  );
};

const WithPlan = () => {
  const {
    user: { plan },
  } = useContext(AuthContext);

  const {
    plan_type: { premium_plus },
  } = plan;

  return (
    <>
      <PlanBadge />
      {!premium_plus && (
        <Link href="/dashboard/upgrade">
          <Button className="dashboard__menu-update-plan-btn">
            Actualizar plan
          </Button>
        </Link>
      )}
      <Link href="/dashboard/plan">
        <Button className="dashboard__menu-info__plan-btn">
          Informacion del plan <Info />
        </Button>
      </Link>
    </>
  );
};

export default User;

const PlanBadge = () => {
  const [badge, setBadge] = useState(1);

  const {
    user: {
      plan: { plan_type },
    },
  } = useContext(AuthContext);

  useEffect(() => {
    if (plan_type.premium_plus) {
      setBadge(2);
    }
  }, [badge]);

  return (
    <>
      <h3
        className={`dashboard_menu-planBadge badge-${
          badge === 2 ? "premium_plus" : "premium"
        }`}
      >
        {badge === 2 ? "Premium Plus" : "Premium"}
      </h3>
    </>
  );
};
