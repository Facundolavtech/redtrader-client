import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

export async function updatePlanAdmin(data) {
  try {
    const response = await axiosClient
      .put(`/admin/updatePlan`, data, {
        headers: { Authorization: data.token },
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

export async function updateAdmin(data) {
  try {
    const response = await axiosClient
      .put(`/admin/updateAdmin`, data, {
        headers: {
          Authorization: data.token,
        },
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

export async function updateEducator(data) {
  const { active, email, token } = data;

  try {
    const response = await axiosClient
      .put(
        `/admin/updateEducator`,
        { active, email },
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

export async function deleteAccount(data) {
  const { email, token } = data;

  try {
    const response = await axiosClient
      .delete(`/admin/deleteAccount/${email}`, {
        headers: { Authorization: token },
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

export async function updatePartner(data) {
  const { email, special_discount, active, token } = data;
  try {
    const response = await axiosClient
      .put(
        "/admin/updatePartner",
        { email, special_discount, active },
        {
          headers: { Authorization: token },
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
