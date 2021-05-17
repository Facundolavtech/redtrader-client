import { useEffect, useState } from "react";
import Hero from "../components/Home/HomeHero/HomeHero";
import AuthModal from "../components/Modal/Modal";
import AuthForm from "../components/Auth/AuthForms";
import Header from "../components/Header";
import Logo from "../components/Header/Logo";
import HomeNav from "../components/Home/HomeNav";
import Sections from "../components/Home/Sections";
import HomeFooter from "../components/Home/HomeFooter";
import FloatingWhatsapp from "../components/Home/FloatingWhatsapp";
import axiosClient from "../config/axiosClient";

export default function Inicio() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getAuth = async () => {
      const token = await localStorage.getItem("userToken");
      if (!token) {
        return setLoggedIn(false);
      }

      await axiosClient
        .get("/users/auth", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        });
    };
  }, []);

  return (
    <>
      <style jsx global>
        {`
          body {
            overflow-y: ${backdrop ? "hidden" : "unset"};
          }
        `}
      </style>
      <div className={backdrop ? "backdrop" : ""}></div>
      <Header
        style={openModal ? { boxShadow: "none" } : null}
        classes={"home__header"}
      >
        <div className="header__container">
          <Logo classes={"header__logo"} />
          <HomeNav
            classes={"home__nav"}
            setOpenModal={setOpenModal}
            setIsLoginForm={setIsLoginForm}
            setBackdrop={setBackdrop}
            loggedIn={loggedIn}
          />
        </div>
      </Header>
      <Hero
        setOpenModal={setOpenModal}
        setIsLoginForm={setIsLoginForm}
        loggedIn={loggedIn}
      />
      <Sections
        setIsLoginForm={setIsLoginForm}
        setOpenModal={setOpenModal}
        loggedIn={loggedIn}
      />
      <HomeFooter />
      <AuthModal
        open={openModal}
        close={handleCloseModal}
        title={isLoginForm ? "Iniciar Sesion" : "Registrarse"}
      >
        <AuthForm isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
      </AuthModal>
      <FloatingWhatsapp />
    </>
  );
}
