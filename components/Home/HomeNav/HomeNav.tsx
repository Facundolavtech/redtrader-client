import React, { useState, useEffect } from "react";
import HomeMenu from "../HomeMenu";
import HamburgerMenu from "react-hamburger-menu";
import classNames from "classnames";

const HomeNav = ({ classes, setOpenModal, setIsLoginForm, setBackdrop }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preventNavFlash, setPreventNavFlash] = useState(true);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        console.log(window.innerWidth);
        if (window.innerWidth <= 768) setIsMobile(true);
        else setIsMobile(false);
      });
    }
  });

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setPreventNavFlash(false);
        setIsMobile(false);
      }
    }
  }, []);

  const handleOpenMenu = () => {
    setPreventNavFlash(false);
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
      {!preventNavFlash && (
        <nav className={menuClass}>
          <HomeMenu
            setOpenModal={setOpenModal}
            setIsLoginForm={setIsLoginForm}
            handleOpenMenu={handleOpenMenu}
          />
        </nav>
      )}
    </>
  );
};

export default HomeNav;
