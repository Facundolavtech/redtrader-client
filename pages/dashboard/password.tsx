import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Nav from "../../components/Dashboard/Nav";
import ChangePasswordForm from "../../components/Dashboard/ChangePassword";
import useAuth from "../../hooks/useAuth";

const password = () => {
  const { user, token } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [tokenState, setTokenState] = useState(null);

  useEffect(() => {
    setUserInfo(user);
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
          <ChangePasswordForm userId={user._id} token={tokenState} />
        </>
      ) : (
        "Cargando"
      )}
    </>
  );
};

export default password;
