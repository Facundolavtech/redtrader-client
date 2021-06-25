import React, { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const RoleBadge = () => {
  const { user } = useContext(AuthContext);

  const { roles } = user.data;

  if (roles.includes("admin"))
    return <h3 className="dashboard__menu-rolBadge admin">Administrador</h3>;
  if (roles.includes("educator") && !roles.includes("admin"))
    return <h3 className="dashboard__menu-rolBadge educator">Educador</h3>;
  if (roles.includes("partner") && !roles.includes("admin"))
    return <h3 className="dashboard__menu-rolBadge partner">Partner</h3>;
  else return null;
};

export default RoleBadge;
