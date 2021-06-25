import plans from "../helpers/plans";

const setPlanDetailsFunction = (plan_type, setPlanDetails) => {
  if (plan_type === "premium_plus") {
    setPlanDetails({
      name: plans[1].name,
      monthly: plans[1].monthly,
    });
  } else {
    setPlanDetails({
      name: plans[0].name,
      monthly: plans[0].monthly,
    });
  }
};

export default setPlanDetailsFunction;
