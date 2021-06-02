import { Button } from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

const ChangePassword = () => {
  return (
    <Link href="/dashboard/changepassword">
      <Button className="dashboard__menu-changePassword-btn">
        Cambiar contraseña
        <VpnKey />
      </Button>
    </Link>
  );
};

export default ChangePassword;
