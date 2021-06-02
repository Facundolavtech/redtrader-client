import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";
import { PriceWithDiscount, PriceWithoutDiscount } from "./Prices";

const PlanInfo = () => {
  const {
    user: { discount, first_month_payed },
  } = useContext(AuthContext);

  const { price, plan_name } = useSelector((state: any) => state.checkout);

  return (
    <>
      <h2>{plan_name}</h2>
      {discount.active ? (
        <PriceWithDiscount
          first_month_payed={first_month_payed}
          price={price}
          discount={discount}
        />
      ) : (
        <PriceWithoutDiscount
          first_month_payed={first_month_payed}
          price={price}
        />
      )}
    </>
  );
};

export default PlanInfo;
