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

export async function sendResetPasswordEmail(email) {
  try {
    const response = await axiosClient.post(`/users/forgotpassword`, {
      email,
    });

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function resetPassword(id, token, password) {
  try {
    const response = await axiosClient.post(`/users/resetpassword`, {
      id,
      token,
      password,
    });

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function sendConfirmAccountEmail(email) {
  try {
    const response = await axiosClient.post(`/users/sendconfirmemail`, {
      email,
    });

    return {
      status: response.status,
      msg: response.data,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function confirmAccount(id, token) {
  try {
    const response = await axiosClient.post(`/users/confirmaccount`, {
      id,
      token,
    });

    return {
      msg: response.data,
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
  }
}

export async function getConfirmAccountToken(id) {
  try {
    const response = await axiosClient.get(`/users/confirmaccount/${id}`);

    return {
      status: response.status,
    };
  } catch (error) {
    return error.response.data;
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
