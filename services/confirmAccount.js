import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function sendConfirmAccountEmail(email) {
  try {
    const response = await axiosClient
      .post(`/users/confirm/sendconfirmemail`, {
        email,
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

export async function confirmAccount(id, token) {
  try {
    const response = await axiosClient
      .post(`/users/confirm/confirmaccount`, {
        id,
        token,
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
    toast.error("Ocurrio un error");
    return;
  }
}

export async function getConfirmAccountToken(id) {
  try {
    const response = await axiosClient
      .get(`/users/confirm/confirmaccount/${id}`)
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        return err.response.status;
      });

    return response;
  } catch (error) {
    return;
  }
}
