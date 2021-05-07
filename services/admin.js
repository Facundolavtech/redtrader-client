import axiosClient from "../config/axiosClient";

export async function updatePlanAdmin(data) {
  const { id } = data;

  try {
    const response = await axiosClient.put(
      `/users/admin/updatePlan/${id}`,
      data
    );

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function updateAdmin(data) {
  const { id } = data;

  try {
    const response = await axiosClient.put(
      `/users/admin/updateAdmin/${id}`,
      data
    );

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function deleteAccount(data) {
  const { id, email } = data;

  try {
    const response = await axiosClient.delete(
      `/users/admin/deleteAccount/${id}/${email}`
    );

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}
