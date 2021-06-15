import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleAuthModalAction, {
  handleCloseAuthModalAction,
} from "../redux/actions/Modal";
import Hero from "../components/Home/Hero/Hero";
import HomeFooter from "../components/Home/Footer";
import AuthContext from "../context/Auth";
import HomeHeader from "../components/UI/Header/HomeHeader";
import Modal from "../components/Modal/Modal";
import Forms from "../components/Auth/Forms";
import Whatsapp from "../components/Home/Whatsapp";
import Sections from "../components/Home/Sections";
import SEO from "../components/SEO";
import { useRouter } from "next/router";

export default function Inicio() {
  const backdrop = useSelector((state: any) => state.backdrop.active);

  const { user, setUser, setToken } = useContext(AuthContext);

  const {
    query: { partnerID },
  } = useRouter();

  useEffect(() => {
    if (partnerID) {
      localStorage.setItem("partnerID", partnerID[0]);
    }
  }, [partnerID]);

  useEffect(() => {
    if (user && !user.confirmed) {
      setUser(null);
      setToken(null);
    }
    dispatch(handleCloseAuthModalAction());
  }, []);

  const dispatch = useDispatch();

  const { open } = useSelector((state: any) => state.modal.auth_modal);
  const signInForm = useSelector((state: any) => state.auth.signInForm);

  return (
    <>
      <SEO title="Academia de trading" />
      <style jsx global>
        {`
          html {
            overflow-y: ${backdrop ? "hidden !important" : "unset"};
          }

          html,
          body {
            overflow-x: hidden;
            -ms-overflow-style: initial; /* IE and Edge */
            scrollbar-width: initial; /* Firefox */
          }
          body::-webkit-scrollbar {
            display: block;
            width: 12px;
            cursor: pointer;
            position: absolute;
            z-index: 9000;
          }
          body::-webkit-scrollbar-track {
            background: none;
          }
          body::-webkit-scrollbar-thumb {
            background-color: rgba(245, 6, 6, 0.705);
            border-radius: 20px;
            border: 3px solid #ffffff;
          }
        `}
      </style>
      <div className={backdrop ? "backdrop" : ""}></div>
      <HomeHeader />
      <Hero />
      <Sections />
      <HomeFooter />
      <Modal
        open={open}
        close={() => dispatch(handleAuthModalAction())}
        title={signInForm ? "Iniciar Sesion" : "Registrarse"}
      >
        <Forms />
      </Modal>
      <Whatsapp />
    </>
  );
}
