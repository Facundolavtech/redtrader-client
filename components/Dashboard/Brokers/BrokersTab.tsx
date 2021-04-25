import { Button } from "@material-ui/core";
import React from "react";

const BrokersTab = () => {
  return (
    <>
      <div className="brokers__info">
        <h2>
          Te recomendamos los mejores brokers, con las mas bajas comisiones, los
          mas bajos spreads, y con bonos exclusivos por ser parte de RedTrader
        </h2>
      </div>
      <div className="brokers__card__container">
        <div className="brokers__card">
          <div className="brokers__card-img">
            <img src="/assets/img/xm-logo.svg" />
          </div>
          <div className="brokers__card-info">
            <h2>XM</h2>
            <p>
              Crea tu cuenta, obten un bono del <span>100%</span> de tu deposito
              hasta 500 U$D, y retira con las comisiones mas bajas del mercado
            </p>
            <span className="brokers__not-valid-AR">
              No valido para argentina
            </span>
            <a
              href="https://clicks.pipaffiliates.com/c?c=365075&l=es&p=1"
              target="_blank"
            >
              <Button variant="contained" color="primary">
                Crear cuenta
              </Button>
            </a>
          </div>
        </div>
        <div className="brokers__card">
          <div className="brokers__card-img">
            <img src="/assets/img/fxprimus-logo.png" />
          </div>
          <div className="brokers__card-info">
            <h2>FX Primus</h2>
            <p>
              Spreads bajos, poca comision de mercado, crea tu cuenta y obten un
              bono del <span>100%</span> sobre tu deposito por ser parte de
              RedTrader
            </p>
            <span className="brokers__valid-AR">Valido para argentina</span>
            <a
              href="https://clients.fxprimus.com/en/register?ref=50005341®️ulator=vu"
              target="_blank"
            >
              <Button variant="contained" color="primary">
                Crear cuenta
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrokersTab;
