import { Button } from "@material-ui/core";
import { AddShoppingCart, Lock } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

const LockContent = () => {
  return (
    <div className="lock__container">
      <Lock className="lock__img" />
      <h2 className="lock__title">¡Contenido bloqueado!</h2>
      <p className="lock__p">
        Adquiere un plan para acceder a todo el contenido premium de RedTrader
      </p>
      <Link href="/dashboard/pay">
        <Button variant="contained" color="primary" className="lock__btn">
          Adquirir Plan <AddShoppingCart />
        </Button>
      </Link>
    </div>
  );
};

export default LockContent;
