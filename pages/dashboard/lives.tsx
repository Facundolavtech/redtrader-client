import React, { useEffect, useState } from "react";
import LivesList from "../../components/Dashboard/Live/LivesList";
import Nav from "../../components/Dashboard/Nav";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import usePlan from "../../hooks/usePlan";

const lives = () => {
  const { user, token } = usePlan();
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
      {userInfo !== null && token !== null ? (
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
          <LivesList token={tokenState} />
        </>
      ) : (
        "Cargando"
      )}
    </>
  );
};

export default lives;
