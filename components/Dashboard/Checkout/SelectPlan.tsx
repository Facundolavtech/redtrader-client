import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../../context/Auth";
import plans from "../../../helpers/plans";
import { setPlanAction } from "../../../redux/actions/Checkout";

const SelectPlan = () => {
  const {
    user: { data },
  } = useContext(AuthContext);

  const dispatch = useDispatch();

  const setPlan = (monthlyPrice, firstMonthPrice, plan_name, identifier) => {
    let price;

    if (data.first_month_payed) {
      price = monthlyPrice;
    } else {
      price = firstMonthPrice;
    }

    dispatch(setPlanAction({ price, plan_name, identifier }));
  };

  return (
    <>
      <div className="selectplan__container">
        {plans.map((plan, index) => (
          <div className="selectplan__card" key={index}>
            <div className="card__img">
              {index + 1 === 1 ? (
                <img src="/assets/img/selectplan01.jpg" />
              ) : (
                <img src="/assets/img/selectplan02.jpg" />
              )}
            </div>
            <div className={`card__header card__header-${index + 1}`}>
              {plan.name}
            </div>
            <div className="prices">
              <h2>
                ${plan.first_month}.00 <span>/ Primer mes</span>
              </h2>
              <h2>
                ${plan.monthly}.00 <span>/ mensual</span>
              </h2>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                setPlan(
                  plan.monthly,
                  plan.first_month,
                  plan.name,
                  plan.identifier
                )
              }
            >
              Seleccionar
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectPlan;
