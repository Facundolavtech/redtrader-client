import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function createPayment(
  currency,
  token,
  plan_name,
  partner_discount = false,
  discount = 0
) {
  try {
    const response = await axiosClient
      .post(
        "/payments/create",
        { currency, plan_name, partner_discount, discount },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        return {
          checkout_url: res.data.checkout_url,
          status: res.status,
        };
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.status;
      });

    return response;
  } catch (error) {
    toast.error("Ocurrio un error");
    return;
  }
}

export async function upgradePayment(currency, token, plan_name, discount = 0) {
  try {
    const response = await axiosClient
      .post(
        "/payments/upgrade",
        { currency, plan_name, discount },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        return {
          checkout_url: res.data.checkout_url,
          status: res.status,
        };
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.status;
      });

    return response;
  } catch (error) {
    toast.error("Ocurrio un error");
    return;
  }
}
