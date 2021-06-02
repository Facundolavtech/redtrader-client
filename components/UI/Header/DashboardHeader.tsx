import React from "react";
import Nav from "../../Dashboard/Nav";
import Logo from "../Logo/Logo";

const DashboardHeader = () => {
  return (
    <header className="dashboard__header">
      <Logo href="/dashboard" />
      <Nav />
    </header>
  );
};

export default DashboardHeader;
