import { createPayment, upgradePayment } from "../../../services/payments";
import * as t from "../../types/Checkout";

export function setCurrencyAction(currency) {
  return async (dispatch) => {
    dispatch(setCurrency(currency));
  };
}

const setCurrency = (payload) => ({
  type: t.SET_CURRENCY,
  payload,
});

export function createPaymentAction(currency, token, plan_name, discount) {
  return async (dispatch) => {
    dispatch(creatingPayment());
    const response = await createPayment(currency, token, plan_name, discount);

    if (response.status === 200) {
      dispatch(createPaymentSuccess(response.checkout_url));
    } else {
      dispatch(createPaymentError());
    }
  };
}

export function upgradePaymentAction(currency, token, plan_name, discount) {
  return async (dispatch) => {
    dispatch(creatingPayment());
    const response = await upgradePayment(currency, token, plan_name, discount);

    if (response.status === 200) {
      dispatch(createPaymentSuccess(response.checkout_url));
    } else {
      dispatch(createPaymentError());
    }
  };
}

const creatingPayment = () => ({
  type: t.CREATE_PAYMENT,
});

const createPaymentSuccess = (payload) => ({
  type: t.CREATE_PAYMENT_SUCCESS,
  payload,
});

const createPaymentError = () => ({
  type: t.CREATE_PAYMENT_ERROR,
});

export function setPlanAction(details) {
  return async (dispatch) => {
    dispatch(setPlan(details));
  };
}

const setPlan = ({ plan_name, price, upgrade = false }) => ({
  type: t.SET_PLAN,
  payload: {
    plan_name,
    price,
    upgrade,
  },
});

export function resetCheckoutStateAction() {
  return async (dispatch) => {
    dispatch(resetCheckoutState());
  };
}

const resetCheckoutState = () => ({
  type: t.RESET_CHECKOUT_STATE,
});
