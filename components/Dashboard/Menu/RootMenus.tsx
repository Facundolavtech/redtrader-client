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

  const { roles, referred, email, short_id, name } = user.data;

  return (
    <>
      <Person className="dashboard__menu-person" />
      <h1>{name}</h1>
      <h3 className="dashboard__menu-email">{email}</h3>
      <h3 className="dashboard__menu-shortid">
        ID: <span>{short_id || null}</span>
      </h3>
      {referred && <Referred />}
      <RoleBadge />
      <RoleSwitch roles={roles} />
      <ChangePassword />
      <hr />
      <Logout />
    </>
  );
};

export default RootMenus;

const RoleSwitch = ({ roles }) => {
  if (roles.includes("admin")) {
    return <Admin />;
  } else if (roles.includes("partner") && !roles.includes("admin")) {
    return <PartnerMenu />;
  } else if (roles.includes("educator") && !roles.includes("admin")) {
    return <Educator />;
  } else {
    return <User />;
  }
};
