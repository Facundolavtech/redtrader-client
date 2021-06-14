import { Button } from "@material-ui/core";
import { AddShoppingCart, ArrowUpward, Lock } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

interface LockContentProps {
  premium_plus?: boolean;
}

const LockContent = ({ premium_plus }: LockContentProps) => {
  return (
    <div className="lock__container">
      <Lock className="lock__img" />
      <h2 className="lock__title">¡Contenido bloqueado!</h2>
      <p className="lock__p">
        {premium_plus
          ? "Necesitas el plan Premium Plus para acceder a este contenido"
          : "Adquiere un plan para acceder a todo el contenido premium de RedTrader"}
      </p>
      <Link href={premium_plus ? "/dashboard/upgrade" : "/dashboard/checkout"}>
        <Button variant="contained" color="primary" className="lock__btn">
          {premium_plus ? "Actualizar Plan" : "Adquirir Plan"}{" "}
          {premium_plus ? <ArrowUpward /> : <AddShoppingCart />}
        </Button>
      </Link>
    </div>
  );
};

export default LockContent;
