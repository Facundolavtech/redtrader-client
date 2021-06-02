import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function sendResetPasswordEmail(email) {
  try {
    const response = await axiosClient
      .post(`/users/password/forgot`, {
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
    toast.error("Ocurrio un error");
  }
}

export async function resetPassword(id, token, password) {
  try {
    const response = await axiosClient
      .post(`/users/password/reset`, {
        id,
        token,
        password,
      })
      .then((res) => {
        toast.success(res.data);
        return res.status;
      })
      .catch((err) => {
        toast.error(err.response.data);
        return err.response.data;
      });

    return response;
  } catch (error) {
    toast.error("Ocurrio un error");
  }
}

export async function getResetPasswordToken(id) {
  try {
    const response = await axiosClient.get(`/users/forgotpassword/${id}`);

    return {
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}
