import React, { useEffect, useState } from "react";
import Nav from "../../../components/Dashboard/Nav";
import Header from "../../../components/Header";
import Logo from "../../../components/Header/Logo";
import AdminNav from "../../../components/Admin/AdminNav";
import useAuth from "../../../hooks/useAuth";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { user, token } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [tokenState, setTokenState] = useState(null);

  useEffect(() => {
    if (user !== null && user.isSuperAdmin === false) {
      router.push("/dashboard");
    } else {
      setUserInfo(user);
    }
  }, [user]);

  useEffect(() => {
    setTokenState(token);
  }, [token]);

  return (
    <>
      {userInfo !== null && tokenState !== null ? (
        <>
          <Header classes={"dashboard__header"}>
            <Logo classes={"dashboard__logo"} />
            <Nav
              name={userInfo.name}
              plan={userInfo.plan}
              shortId={userInfo.short_id}
              admin={userInfo.isSuperAdmin}
              educator={userInfo.role_educator}
            />
          </Header>
          <AdminNav id={userInfo._id} token={tokenState} />
        </>
      ) : (
        "Cargando"
      )}
    </>
  );
};

export default index;
