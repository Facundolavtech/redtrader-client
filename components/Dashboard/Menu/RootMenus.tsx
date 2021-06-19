import { Person } from "@material-ui/icons";
import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import Admin from "./Items/Admin";
import ChangePassword from "./Items/ChangePassword";
import Educator from "./Items/Educator";
import Logout from "./Items/Logout";
import PartnerMenu from "./Items/Partner";
import Referred from "./Items/Referred";
import RoleBadge from "./Items/RoleBadge";
import User from "./Items/User";

const RootMenus = () => {
  const { user } = useContext(AuthContext);

  const { short_id, roles } = user;

  return (
    <>
      <Person className="dashboard__menu-person" />
      <h1>{user.name}</h1>
      <h3 className="dashboard__menu-email">{user.email}</h3>
      <h3 className="dashboard__menu-shortid">
        ID: <span>{short_id || null}</span>
      </h3>
      {user.referred && !user.first_month_payed && <Referred />}
      <RoleBadge />
      {!roles.admin && !roles.educator && !roles.partner && <User />}
      {roles.admin && <Admin />}
      {roles.educator && !roles.admin && <Educator />}
      {roles.partner && !roles.admin && <PartnerMenu />}
      <ChangePassword />
      <hr />
      <Logout />
    </>
  );
};

export default RootMenus;
