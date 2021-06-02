import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../../Home/Nav";

const HomeHeader = () => {
  return (
    <header className="home__header">
      <div className="header__container">
        <Logo href="/" />
        <Nav />
      </div>
    </header>
  );
};

export default HomeHeader;
