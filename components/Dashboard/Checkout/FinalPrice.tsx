import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";
import { PriceWithDiscount, PriceWithoutDiscount } from "./Prices";

const FinalPrice = () => {
  const {
    user: { discount, first_month_payed, referred },
  } = useContext(AuthContext);

  const { price, upgrade } = useSelector((state: any) => state.checkout);

  return (
    <>
      {discount.active ? (
        <PriceWithDiscount
          first_month_payed={first_month_payed}
          price={price}
          discount={discount}
          partnerDiscount={referred ? 10 : null}
          upgrade={upgrade}
        />
      ) : (
        <PriceWithoutDiscount
          first_month_payed={first_month_payed}
          price={price}
          upgrade={upgrade}
          partnerDiscount={referred ? 10 : null}
        />
      )}
    </>
  );
};

export default FinalPrice;
