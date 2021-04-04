import Link from "next/link";
import {
  School,
  PermDeviceInformation,
  Group,
  MonetizationOn,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

const HomeMenu = ({ setOpenModal, setIsLoginForm, handleOpenMenu }) => {
  return (
    <>
      <li>
        <Link href="#academy">
          <a onClick={handleOpenMenu}>Academia</a>
        </Link>
        <School />
      </li>
      <li>
        <Link href="#signals">
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
        <Link href="#price">
          <a onClick={handleOpenMenu}>Precio</a>
        </Link>
        <MonetizationOn />
      </li>
      <hr className="nav__vertical-line" />
      <li className="nav__login">
        <a
          onClick={() => {
            setOpenModal(true);
            setIsLoginForm(true);
            handleOpenMenu();
          }}
        >
          Iniciar Sesion
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
  );
};

export default HomeMenu;
