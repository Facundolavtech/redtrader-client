import { Person } from "@material-ui/icons";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../../context/Auth";
import { handleMenuAction } from "../../../redux/actions/UserMenu";
import Admin from "./Items/Admin";
import ChangePassword from "./Items/ChangePassword";
import Educator from "./Items/Educator";
import Logout from "./Items/Logout";
import RoleBadge from "./Items/RoleBadge";
import User from "./Items/User";

const RootMenus = () => {
  const { user } = useContext(AuthContext);

  const { short_id, roles } = user;

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(handleMenuAction());
  };

  return (
    <>
      <Person className="dashboard__menu-person" />
      <h1>{user.name}</h1>
      <h3 className="dashboard__menu-email">{user.email}</h3>
      <h3 className="dashboard__menu-shortid">
        ID: <span>{short_id || null}</span>
      </h3>
      <RoleBadge />
      {!roles.admin && !roles.educator && <User />}
      {roles.admin && <Admin />}
      {roles.educator && !roles.admin && <Educator />}
      <ChangePassword />
      <hr />
      <Logout />
    </>
  );
};

export default RootMenus;
