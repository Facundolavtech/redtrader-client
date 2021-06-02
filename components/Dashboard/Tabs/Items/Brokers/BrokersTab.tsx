import { Button } from "@material-ui/core";
import React from "react";

const BrokersTab = () => {
  return (
    <>
      <div className="brokers__container">
        <div className="brokers__card__container">
          <div className="brokers__card">
            <div className="brokers__card-title">
              <img src="/assets/img/xm-logo.svg" />
              <h2>XM</h2>
            </div>
            <div className="brokers__card-info">
              <p>
                Crea tu cuenta, obten un bono del <span>100%</span> de tu
                deposito hasta 500 U$D, y retira con las comisiones mas bajas
                del mercado
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
            <div className="brokers__card-title">
              <img src="/assets/img/fxprimus-logo.png" />
              <h2>FX Primus</h2>
            </div>
            <div className="brokers__card-info">
              <p>
                Spreads bajos, poca comision de mercado, crea tu cuenta y obten
                un bono del <span>100%</span> sobre tu deposito por ser parte de
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
      </div>
    </>
  );
};

export default BrokersTab;
