import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";
import {
  createPaymentAction,
  upgradePaymentAction,
} from "../../../redux/actions/Checkout";
import BtnLoading from "../../UI/BtnLoading";

const CreatePayment = () => {
  const { currency, loading, plan_name, upgrade } = useSelector(
    (state: any) => state.checkout
  );
  const {
    user: { discount, first_month_payed, referred },
    token,
  } = useContext(AuthContext);

  const dispatch = useDispatch();

  async function createPayment() {
    if (currency !== null) {
      if (upgrade === true) {
        dispatch(
          upgradePaymentAction(
            currency,
            token,
            plan_name,
            discount.active ? discount.percent : 0
          )
        );
      } else {
        dispatch(
          createPaymentAction(
            currency,
            token,
            plan_name,
            !first_month_payed && referred !== null ? true : false,
            discount.active ? discount.percent : 0
          )
        );
      }
    }
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      disabled={currency === null}
      onClick={currency ? createPayment : null}
    >
      {loading ? <BtnLoading size={23} color="#fff" /> : "PAGAR"}
    </Button>
  );
};

export default CreatePayment;
