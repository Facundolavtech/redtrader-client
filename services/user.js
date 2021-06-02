import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function changePassword(data) {
  const { token, password, email } = data;

  try {
    const response = await axiosClient
      .put(
        `/users/changePassword`,
        { newPassword: password, email },
        {
          headers: {
            Authorization: token,
          },
        }
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
