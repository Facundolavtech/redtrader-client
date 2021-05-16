import { Button } from "@material-ui/core";
import { AddShoppingCart, LiveTv, Lock } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

const LiveTab = ({ plan }) => {
  return (
    <>
      {plan ? (
        <>
          <div className="lives-tab__info">
            <LiveTv className="lives-tab__img" />

            <h2>Ingresa a las clases en vivo de RedTrader Live aqui</h2>

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
        <>
          <Lock className="lock__img" />
          <h2>¡No tienes plan!</h2>
          <p>Adquiere el plan premium para acceder a las clases en vivo</p>
          <hr />
          <Link href="/dashboard/pay">
            <Button variant="contained" color="primary">
              Adquirir Plan <AddShoppingCart />
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default LiveTab;
