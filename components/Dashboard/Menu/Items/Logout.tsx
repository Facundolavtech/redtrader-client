import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React, { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Button className="dashboard__menu-logout-btn" onClick={logout}>
        Cerrar sesion
        <ExitToApp />
      </Button>
    </>
  );
};

export default Logout;
