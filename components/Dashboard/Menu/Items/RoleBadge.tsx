import React, { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const RoleBadge = () => {
  const {
    user: { roles },
  } = useContext(AuthContext);

  if (roles.admin)
    return <h3 className="dashboard__menu-rolBadge admin">Administrador</h3>;
  if (roles.educator && !roles.admin)
    return <h3 className="dashboard__menu-rolBadge educator">Educador</h3>;
  else return null;
};

export default RoleBadge;
