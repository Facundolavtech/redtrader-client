import { Button } from "@material-ui/core";
import { AddShoppingCart, LiveTv, Lock } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import LockContent from "../LockContent/LockContent";

const LiveTab = ({ plan }) => {
  return (
    <>
      {plan ? (
        <>
          <div className="lives-tab__info">
            <LiveTv className="lives-tab__img" />

            <h2>Ingresa a RedTrader Live aquí</h2>

            <Link href="/dashboard/lives">
              <Button
                variant="contained"
                color="primary"
                className="enter__btn"
              >
                Ingresar
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <LockContent />
      )}
    </>
  );
};

export default LiveTab;
