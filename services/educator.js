import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function getStreamCredentials(token) {
  try {
    const response = await axiosClient
      .get("/educator/settings/credentials", {
        headers: { Authorization: token },
      })
      .then((res) => {
        return {
          stream_key: res.data.stream_key,
          stream_pw: res.data.stream_pw,
          status: res.status,
        };
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

export async function generateStreamKey(token) {
  try {
    const response = await axiosClient
      .post(
        "/educator/settings/stream_key",
        {},
        { headers: { Authorization: token } }
      )
      .then((res) => {
        toast.success("Nueva llave de transmision generada");
        return { stream_key: res.data, status: res.status };
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

export async function generateStreamPassword(token) {
  try {
    const response = await axiosClient
      .post(
        "/educator/settings/stream_pw",
        {},
        { headers: { Authorization: token } }
      )
      .then((res) => {
        toast.success("Nueva clave de transmision generada");
        return { stream_pw: res.data, status: res.status };
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
