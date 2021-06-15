import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function register(data) {
  if (data.email === "" || data.password === "") return;
  const partnerID = localStorage.getItem("partnerID");
  if (partnerID) data.partnerID = partnerID;

  try {
    const { email } = data;

    console.log(data, partnerID);

    const response = await axiosClient
      .post("/users/auth/register", data)
      .then(async (res) => {
        const token = res.data.token;
        localStorage.setItem("userToken", token);
        await axiosClient.post(`/users/confirm/sendconfirmemail`, {
          email,
        });
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

export async function login(data) {
  if (data.email === "" || data.password === "") return;
  try {
    const response = await axiosClient
      .post("/users/auth/login", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("userToken", token);
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

export async function removeToken() {
  await localStorage.removeItem("userToken");
}
