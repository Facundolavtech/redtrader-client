import React, { useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { LiveTv } from "@material-ui/icons";
import Link from "next/link";
import AuthContext from "../../../../../context/Auth";
import useSocket from "../../../../../hooks/useSocket";
import LockContent from "../../../LockContent/LockContent";

const LiveTab = () => {
  const socket = useSocket();

  const {
    user: { plan },
  } = useContext(AuthContext);

  useEffect(() => {
    function handleEvent(payload) {
      console.log(payload);
    }

    if (socket) {
      socket.on("SOME_EVENT", handleEvent);
    }
  }, [socket]);

  return (
    <>
      {plan.active ? (
        <>
          <div className="lives__container">
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
          </div>
        </>
      ) : (
        <LockContent />
      )}
    </>
  );
};

export default LiveTab;
