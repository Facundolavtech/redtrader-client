import * as t from "../../types/Checkout";

const initialState = {
  plan_name: null,
  plan_selected: null,
  price: null,
  currency: null,
  loading: false,
  checkout_link: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.SET_PLAN:
      return {
        ...state,
        price: action.payload.price,
        plan_name: action.payload.plan_name,
        plan_selected: true,
      };

    case t.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case t.CREATE_PAYMENT:
      return {
        ...state,
        loading: true,
      };

    case t.CREATE_PAYMENT_ERROR:
      return {
        ...state,
        loading: false,
      };

    case t.CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        checkout_link: action.payload,
      };

    case t.RESET_CHECKOUT_STATE:
      return initialState;

    default:
      return state;
  }
}
