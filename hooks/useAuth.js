import { useState, useEffect } from "react";
import axiosClient from "../config/axiosClient";
import { useRouter } from "next/router";

const useAuth = () => {
  const { push } = useRouter();
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const token = await localStorage.getItem("userToken");

    if (!token) {
      push("/");
      return;
    }
    const response = await axiosClient.get("/users/auth", {
      headers: {
        Authorization: token,
      },
    });

    if (response.status !== 200) {
      push("/");
    }

    if (response.data.confirmed === false) {
      push("/confirm");
    }

    setUser(response.data);
  }, []);

  return { user };
};

export default useAuth;
