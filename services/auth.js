import axiosClient from "../config/axiosClient";

export async function register(data) {
  try {
    const newUser = await axiosClient.post("/users/register", data);

    const token = newUser.data.token;

    const response = {
      msg: newUser.data.msg,
      token,
      status: newUser.status,
    };

    await localStorage.setItem("userToken", token);

    if (newUser.status === 200) {
      const { email } = data;
      await axiosClient.post(`/users/sendconfirmemail`, {
        email,
      });
    }

    return response;
  } catch (error) {
    return error.response.data;
  }
}

export async function login(data) {
  try {
    const loginUser = await axiosClient.post("/users/login", data);

    const token = loginUser.data.token;

    if (loginUser.status !== 200) {
      return loginUser.data;
    }

    const response = {
      msg: loginUser.data.msg,
      token,
      status: loginUser.status,
    };

    await localStorage.setItem("userToken", token);

    return response;
  } catch (error) {
    return error.response.data;
  }
}

export async function removeToken() {
  const token = await localStorage.getItem("userToken");

  if (token) {
    await cookies.remove("userToken");
  }

  if (!token) {
    return true;
  }
}
