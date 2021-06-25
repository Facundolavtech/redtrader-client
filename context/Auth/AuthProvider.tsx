import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import AuthContext from ".";
import excludePages from "../../helpers/excludePages";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const pathname: string = router.pathname;

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      const getToken = await localStorage.getItem("userToken");
      setToken(getToken);

      await axiosClient
        .get("/users/auth", {
          headers: {
            Authorization: getToken,
          },
        })
        .then((response) => {
          setUser({ data: response.data.user, plan: response.data.plan });
        })
        .catch(() => {
          logout();
        });
    } catch (error) {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    setToken(null);
    if (!excludePages.includes(pathname)) {
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, setUser, setToken, authUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
