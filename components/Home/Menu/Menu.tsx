import Link from "next/link";
import {
  School,
  PermDeviceInformation,
  Group,
  ArrowDropDown,
  PlayArrow,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import { useDispatch } from "react-redux";
import handleAuthModalAction from "../../../redux/actions/Modal";
import handleAuthFormsAction from "../../../redux/actions/Auth";
import AuthButtons from "./AuthButtons";

const Menu = ({ handleOpenMenu }) => {
  const { user, token } = useContext(AuthContext);

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(handleAuthModalAction());
  };

  const handleAuthForms = (payload) => {
    dispatch(handleAuthFormsAction(payload));
  };

  return (
    <>
      <div className="homemenu__dropdown">
        <span>
          Servicios <ArrowDropDown />
        </span>
        <div className="homemenu__dropdown-content">
          <a href="#academia" onClick={handleOpenMenu}>
            Academia <School />
          </a>
          <a href="#senales" onClick={handleOpenMenu}>
            Señales de Trading <PermDeviceInformation />
          </a>
          <a href="#clases" onClick={handleOpenMenu}>
            Clases en vivo <PlayArrow />
          </a>
        </div>
      </div>
      <li>
        <Link href="#partners">
          <a onClick={handleOpenMenu}>Partners</a>
        </Link>
        <Group />
      </li>
      <li className="planes">
        <Link href="#planes">
          <a onClick={handleOpenMenu}>Planes</a>
        </Link>
        <img src="/assets/svg/planes.svg" alt="planes-img" />
      </li>
      <hr className="nav__vertical-line" />
      {user && token && user.confirmed ? (
        <Link href="/dashboard">
          <Button
            onClick={handleOpenMenu}
            variant="contained"
            color="primary"
            className="go-dashboard__btn"
          >
            Ir al dashboard
          </Button>
        </Link>
      ) : (
        <AuthButtons
          handleModal={handleModal}
          handleAuthForms={handleAuthForms}
          handleOpenMenu={handleOpenMenu}
        />
      )}
    </>
  );
};

export default Menu;
