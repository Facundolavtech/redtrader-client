import * as t from "../../types/Admin/Coupons";

const initialState = {
  loadingCoupons: true,
  coupons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.GET_COUPONS_SUCCESS:
      return {
        ...state,
        loadingCoupons: false,
        coupons: action.payload,
      };

    case t.GET_COUPONS_ERROR:
      return initialState;

    case t.DELETE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter(
          (coupon) => coupon._id !== action.payload
        ),
      };

    default:
      return state;
  }
}
