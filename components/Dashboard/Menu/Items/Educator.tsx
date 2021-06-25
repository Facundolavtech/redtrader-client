import { Button } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

const Educator = () => {
  return (
    <>
      <Link href="/dashboard/educator/settings">
        <Button className="dashboard__menu-educatorPanel-btn">
          Panel de Educador
          <PlayArrow />
        </Button>
      </Link>
    </>
  );
};

export default Educator;
