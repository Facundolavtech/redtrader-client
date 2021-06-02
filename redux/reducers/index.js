import { combineReducers } from "redux";
import userMenuReducer from "./UserMenu";
import backDropReducer from "./BackDrop";
import checkoutReducer from "./Checkout";
import modalReducer from "./Modal";
import authReducer from "./Auth";
import couponsReducer from "./Admin/Coupons";

export default combineReducers({
  usermenu: userMenuReducer,
  backdrop: backDropReducer,
  checkout: checkoutReducer,
  modal: modalReducer,
  auth: authReducer,
  coupons: couponsReducer,
});
