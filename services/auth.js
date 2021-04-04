import axiosClient from "../config/axiosClient";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function register(data) {
  try {
    const newUser = await axiosClient.post("/users/register", data);

    const token = newUser.data.token;

    const response = {
      msg: newUser.data.msg,
      token,
      status: newUser.status,
    };

    cookies.set("userToken", token);

    return response;
  } catch (error) {
    return {
      msg: error.response.data.msg,
    };
  }
}

export async function login(data) {
  try {
    const loginUser = await axiosClient.post("/users/login", data);

    const token = loginUser.data.token;

    const response = {
      msg: loginUser.data.msg,
      token,
      status: loginUser.status,
    };

    cookies.set("userToken", token);

    return response;
  } catch (error) {
    return {
      msg: error.response.data.msg,
    };
  }
}
