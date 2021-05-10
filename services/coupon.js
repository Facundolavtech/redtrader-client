import axiosClient from "../config/axiosClient";
import { getConfirmAccountToken } from "./user";

export async function createCoupon(data) {
  const { id, percent, name } = data;

  try {
    const response = await axiosClient.post(`/coupons/new/${id}`, {
      discount: percent,
      coupon_name: name,
    });

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function getAllCoupons(token) {
  try {
    const response = await axiosClient.get("/coupons/getAllCoupons", {
      headers: {
        Authorization: token,
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function deleteCoupon(couponId, id) {
  try {
    const response = await axiosClient.delete(
      `/coupons/deleteCoupon/${id}/${couponId}`
    );

    return {
      status: response.status,
      msg: response.data,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function applyCoupon(token, couponName) {
  try {
    const data = {
      coupon_name: couponName,
    };

    const response = await axiosClient.post("/coupons/apply", data, {
      headers: {
        Authorization: token,
      },
    });

    return {
      status: response.status,
      msg: response.data,
    };
  } catch (error) {
    return error.response.data;
  }
}
