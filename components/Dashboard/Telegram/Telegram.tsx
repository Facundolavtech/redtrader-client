import Link from "next/link";
import { Button } from "@material-ui/core";
import { AddShoppingCart, Telegram, Lock } from "@material-ui/icons";

const TelegramTab = ({ plan }) => {
  return (
    <>
      {plan ? (
        <>
          <div className="telegram__info">
            <Telegram className="telegram__img" />
            <h2>
              ¡Bienvenido! Con el siguiente enlace podrás ingresar al grupo de
              señales premium de Redtrader{" "}
            </h2>

            <h3>¡IMPORTANTE!</h3>
            <li>
              ¡Está terminantemente prohibido compartir el enlace del grupo! de
              ser así serás expulsado inmediatamente del grupo sin posibilidad
              de reintegro
            </li>

            <p>¡Disfruta de las señales y buenos profits!</p>

            <Button variant="contained" color="secondary">
              Ingresar <Telegram />
            </Button>
          </div>
        </>
      ) : (
        <>
          <Lock className="lock__img" />
          <h2>¡No tienes plan!</h2>
          <p>
            Adquiere el plan premium para acceder al grupo de señales de
            Redtrader
          </p>
          <hr />
          <Link href="/plan">
            <Button variant="contained" color="primary">
              Adquirir Plan <AddShoppingCart />
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default TelegramTab;
