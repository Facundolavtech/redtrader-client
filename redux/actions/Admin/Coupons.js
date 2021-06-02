import { toast } from "react-toastify";
import { deleteCoupon, getAllCoupons } from "../../../services/coupon";
import * as t from "../../types/Admin/Coupons";

export function getCouponsAction(token) {
  return async (dispatch) => {
    const response = await getAllCoupons(token);

    if (response.status === 200) {
      dispatch(getCouponsSuccess(response.coupons));
    } else {
      toast.error("Ocurrio un error al cargar los cupones");
      dispatch(getCouponsError());
    }
  };
}

const getCouponsSuccess = (payload) => ({
  type: t.GET_COUPONS_SUCCESS,
  payload,
});

const getCouponsError = () => ({
  type: t.GET_COUPONS_ERROR,
});

export function deleteCouponAction(token, couponId) {
  return async (dispatch) => {
    const response = await deleteCoupon(couponId, token);

    if (response === 200) {
      dispatch(deleteCouponFunction(couponId));
    }
  };
}

const deleteCouponFunction = (payload) => ({
  type: t.DELETE_COUPON,
  payload,
});
