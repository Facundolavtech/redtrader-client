import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function createPayment(currency, token, identifier, upgrade) {
  try {
    const response = await axiosClient
      .post(
        "/payments/create",
        { currency, plan_name: identifier, upgrade },
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
