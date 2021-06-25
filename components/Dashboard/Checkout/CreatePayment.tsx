import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../../context/Auth";
import { createPaymentAction } from "../../../redux/actions/Checkout";
import BtnLoading from "../../UI/BtnLoading";

const CreatePayment = () => {
  const { currency, loading, identifier, upgrade } = useSelector(
    (state: any) => state.checkout
  );

  const { token } = useContext(AuthContext);

  const dispatch = useDispatch();

  async function createPayment() {
    if (currency !== null) {
      dispatch(createPaymentAction(currency, token, identifier, upgrade));
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
