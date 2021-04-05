import { userInfo } from "node:os";
import React from "react";
import UserMenu from "../UserMenu";

const Nav = ({ name, plan }) => {
  return (
    <div className="dashboard__nav">
      <h1>{name}</h1>
      <UserMenu plan={plan} />
    </div>
  );
};

export default Nav;
