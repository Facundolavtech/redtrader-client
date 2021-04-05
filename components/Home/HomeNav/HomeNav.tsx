import React, { useState, useEffect } from "react";
import HomeMenu from "../HomeMenu";
import HamburgerMenu from "react-hamburger-menu";
import classNames from "classnames";

const HomeNav = ({ classes, setOpenModal, setIsLoginForm, setBackdrop }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) setIsMobile(true);
        else setIsMobile(false);
      });
    }
  });

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    }
  }, []);


  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
    isMobile ? setBackdrop(!menuOpen) : null;
  };

  const menuClass = classNames(classes, {
    hidden__nav: isMobile && !menuOpen ? true : false,
  });

  return (
    <>
      {isMobile && (
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={handleOpenMenu}
          width={28}
          height={17}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
          className="home__hamburger"
        />
      )}
      <nav className={menuClass}>
        <HomeMenu
          setOpenModal={setOpenModal}
          setIsLoginForm={setIsLoginForm}
          handleOpenMenu={handleOpenMenu}
        />
      </nav>
    </>
  );
};

export default HomeNav;
