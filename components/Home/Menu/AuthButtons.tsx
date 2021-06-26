import { Button } from "@material-ui/core";
import { HowToReg, KeyboardTab } from "@material-ui/icons";
import { useRouter } from "next/router";

const AuthButtons = (props) => {
  const { handleOpenMenu } = props;
  const router = useRouter();

  return (
    <>
      <li className="nav__login">
        <a
          onClick={() => {
            router.push("/signin");
            handleOpenMenu();
          }}
        >
          Iniciar Sesión
        </a>
        <img src="/assets/img/lock.svg" />
      </li>
      <li
        className="nav__comenzar-btn"
        onClick={() => {
          router.push("/signup");
          handleOpenMenu();
        }}
      >
        <Button>
          Registrarse <KeyboardTab />
        </Button>
      </li>
    </>
  );
};

export default AuthButtons;
