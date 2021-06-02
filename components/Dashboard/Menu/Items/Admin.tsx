import { Button } from "@material-ui/core";
import { OfflineBolt } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <>
      <Link href="/dashboard/admin">
        <Button className="dashboard__menu-adminPanel-btn">
          Panel de Admin
          <OfflineBolt />
        </Button>
      </Link>
    </>
  );
};

export default Admin;
