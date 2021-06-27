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
import Forms from "../components/Auth/AuthForms";
import Whatsapp from "../components/Home/Whatsapp";
import Sections from "../components/Home/Sections";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import HomeStyleJSX from "../components/StyleJSX/HomeStyleJSX";

export default function Inicio() {
  const backdrop = useSelector((state: any) => state.backdrop.active);

  const { user, setUser, setToken } = useContext(AuthContext);

  const {
    query: { partner_link },
  } = useRouter();

  useEffect(() => {
    if (partner_link) {
      localStorage.setItem("partner_link", partner_link[0]);
    }
  }, [partner_link]);

  useEffect(() => {
    console.log(`Endpoint:, ${process.env.NEXT_PUBLIC_API_ENDPOINT}`);

    if (user && !user.confirmed) {
      setUser(null);
      setToken(null);
    }
    dispatch(handleCloseAuthModalAction());
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <SEO title="Academia de Trading Profesional" />
      <HomeStyleJSX backdrop={backdrop} />
      <div className={backdrop ? "backdrop" : ""}></div>
      <HomeHeader />
      <Hero />
      <Sections />
      <HomeFooter />
      <Whatsapp />
    </>
  );
}
