import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function createCoupon(data) {
  const { token, percent, name } = data;

  try {
    const response = await axiosClient
      .post(
        `/coupons/new/`,
        {
          discount: percent,
          coupon_name: name,
        },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        toast.success(res.data);
        return res.status;
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.status;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function getAllCoupons(token) {
  try {
    const response = await axiosClient
      .get("/coupons/getAllCoupons", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return {
          status: res.status,
          coupons: res.data,
        };
      })
      .catch((err) => {
        return err.response.status;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function deleteCoupon(couponId, token) {
  try {
    const response = await axiosClient
      .delete(`/coupons/deleteCoupon/${couponId}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        toast.success(res.data);
        return res.status;
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.status;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function applyCoupon(token, couponName) {
  try {
    const data = {
      coupon_name: couponName,
    };

    const response = await axiosClient
      .post("/coupons/apply", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        toast.success(res.data);
        return res.status;
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.status;
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}
