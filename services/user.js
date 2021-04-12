import axiosClient from "../config/axiosClient";

export async function updateUser(id, data, token) {
  try {
    const response = await axiosClient.put(`/users/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    
    return response;
  } catch (error) {
    return error.response.data;
  }
}
