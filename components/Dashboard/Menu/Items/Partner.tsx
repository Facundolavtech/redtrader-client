import React from "react";
import { Button } from "@material-ui/core";
import { Group } from "@material-ui/icons";
import Link from "next/link";

const PartnerMenu = () => {
  return (
    <>
      <Link href="/dashboard/partner">
        <Button className="dashboard__menu-partnerPanel-btn">
          Panel de Partner
          <Group />
        </Button>
      </Link>
    </>
  );
};

export default PartnerMenu;
