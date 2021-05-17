import { useState, useEffect } from "react";
import axiosClient from "../config/axiosClient";
import { useRouter } from "next/router";

const useAuth = () => {
  const { push } = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const getToken = await localStorage.getItem("userToken");

    if (!getToken) {
      push("/");
      return;
    }

    setToken(getToken);

    await axiosClient
      .get("/users/auth", {
        headers: {
          Authorization: getToken,
        },
      })
      .then((response) => {
        if (!response.data.confirmed) {
          push("/confirm");
        }
        setUser(response.data);
      })
      .catch(() => {
        localStorage.removeItem("userToken");
        push("/");
        return;
      });
  }, []);

  return { user, token };
};

export default useAuth;
