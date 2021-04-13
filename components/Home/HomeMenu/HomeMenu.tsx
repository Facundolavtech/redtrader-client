import Link from "next/link";
import {
  School,
  PermDeviceInformation,
  Group,
  MonetizationOn,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

const HomeMenu = ({
  setOpenModal,
  setIsLoginForm,
  handleOpenMenu,
  loggedIn,
}) => {
  return (
    <>
      <li>
        <Link href="#academia">
          <a onClick={handleOpenMenu}>Academia</a>
        </Link>
        <School />
      </li>
      <li>
        <Link href="#senales">
          <a onClick={handleOpenMenu}>Señales de Trading</a>
        </Link>
        <PermDeviceInformation />
      </li>
      <li>
        <Link href="#partner">
          <a onClick={handleOpenMenu}>Partner</a>
        </Link>
        <Group />
      </li>
      <li>
        <Link href="#precio">
          <a onClick={handleOpenMenu}>Precio</a>
        </Link>
        <MonetizationOn />
      </li>
      <hr className="nav__vertical-line" />
      {loggedIn ? (
        <Link href="/dashboard">
          <Button
            variant="contained"
            color="primary"
            className="go-dashboard__btn"
          >
            Ir al dashboard
          </Button>
        </Link>
      ) : (
        <>
          <li className="nav__login">
            <a
              onClick={() => {
                setOpenModal(true);
                setIsLoginForm(true);
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
              setOpenModal(true);
              setIsLoginForm(false);
              handleOpenMenu();
            }}
          >
            <Button>Comenzar</Button>
          </li>
        </>
      )}
    </>
  );
};

export default HomeMenu;
