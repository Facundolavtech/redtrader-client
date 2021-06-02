import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import DrawerMenu from "../DrawerMenu";
import Menu from "../Menu";

const Nav = () => {
  return (
    <div className="dashboard__nav">
      <DrawerMenu />
    </div>
  );
};

export default Nav;
