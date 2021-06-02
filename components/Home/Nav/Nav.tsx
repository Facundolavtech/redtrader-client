import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import HamburgerMenu from "react-hamburger-menu";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { handleBackdropAction } from "../../../redux/actions/BackDrop";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  //Avoid the flash of the nav when loading the page for the first time
  const [preventNavFlash, setPreventNavFlash] = useState(true);

  const dispatch = useDispatch();

  const dispatchBackdrop = () => {
    dispatch(handleBackdropAction());
  };

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
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setPreventNavFlash(false);
      }
    }
  }, []);

  const handleOpenMenu = () => {
    setPreventNavFlash(false);
    setMenuOpen(!menuOpen);
    isMobile ? dispatchBackdrop() : null;
  };
  const home__nav = "home__nav";

  const menuClass = classNames({
    home__nav,
    hidden__nav: (isMobile && !menuOpen) || preventNavFlash ? true : false,
  });

  return (
    <>
      {isMobile && (
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={handleOpenMenu}
          width={25}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
          className="home__hamburger"
        />
      )}
      <nav className={menuClass}>
        <Menu handleOpenMenu={handleOpenMenu} />
      </nav>
    </>
  );
};

export default Nav;
