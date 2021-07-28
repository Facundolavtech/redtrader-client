import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function getTransmissions(token, short_id) {
  try {
    const response = await axiosClient
      .get(`/lives/transmissions/${short_id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return {
          status: res.status,
          transmissions: res.data,
        };
      })
      .catch((err) => {
        toast.error("Ocurrio un error al cargar las transmisiones");
        return {
          status: err.response.status,
          transmissions: [],
        };
      });

    return response;
  } catch (error) {
    toast.error("Ocurrio un error");
  }
}
