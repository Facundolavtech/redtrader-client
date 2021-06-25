import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function getAllPartners(token) {
  try {
    const response = await axiosClient
      .get("/users/partners", {
        headers: { Authorization: token },
      })
      .then((res) => {
        return {
          status: res.status,
          partners: res.data,
        };
      })
      .catch((err) => {
        toast.error("Ocurrio un error al intentar obtener los partners");
        return {
          status: err.response.status,
          partners: null,
        };
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}

export async function getPartnerInfo(token) {
  try {
    const response = await axiosClient
      .get("/users/partners/info", {
        headers: { Authorization: token },
      })
      .then((res) => {
        return {
          status: res.status,
          partner_info: res.data,
        };
      })
      .catch((err) => {
        toast.error("Ocurrio un error, intenta iniciar sesion nuevamente");
        return {
          status: err.response.status,
          partner_info: null,
        };
      });

    return response;
  } catch (error) {
    return toast.error("Ocurrio un error");
  }
}
