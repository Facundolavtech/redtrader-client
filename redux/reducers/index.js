import { combineReducers } from "redux";
import backDropReducer from "./BackDrop";
import checkoutReducer from "./Checkout";
import modalReducer from "./Modal";
import authReducer from "./Auth";
import couponsReducer from "./Admin/Coupons";

export default combineReducers({
  backdrop: backDropReducer,
  checkout: checkoutReducer,
  modal: modalReducer,
  auth: authReducer,
  coupons: couponsReducer,
});
