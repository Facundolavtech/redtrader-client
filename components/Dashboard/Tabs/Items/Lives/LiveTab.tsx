import React from "react";
import { Button } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import Link from "next/link";

const LiveTab = () => {
  return (
    <div className="lives__container">
      <img
        src="/assets/img/livetab-img.png"
        className="lives-tab__img"
        alt="live image"
      />
      <div className="lives-tab__info">
        <PlayArrow />
        <Link href="/dashboard/lives">
          <Button variant="contained" color="primary" className="enter__btn">
            Ingresar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LiveTab;
