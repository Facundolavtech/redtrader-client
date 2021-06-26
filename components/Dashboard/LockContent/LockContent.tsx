import { Button } from "@material-ui/core";
import { ArrowUpward, Lock } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

interface LockContentProps {
  plan_name: string;
}

const LockContent = ({ plan_name }: LockContentProps) => {
  return (
    <div className="lock__container">
      <Lock className="lock__img" />
      <h2 className="lock__title">¡Contenido bloqueado!</h2>
      <p className="lock__p">
        Necesitas el plan {plan_name} para acceder a este contenido
      </p>
      <Link href="/dashboard/upgrade">
        <Button variant="contained" color="primary" className="lock__btn">
          Actualizar Plan
          <ArrowUpward />
        </Button>
      </Link>
    </div>
  );
};

export default LockContent;
