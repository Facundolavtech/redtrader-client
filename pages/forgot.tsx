import ForgotPasswordForm from "../components/ForgotPassword";
import Logo from "../components/UI/Logo/Logo";
import ArrowBackBtn from "../components/BackArrow";
import SEO from "../components/SEO";

const forgot = () => {
  return (
    <>
      <SEO title="Olvide mi contraseña" />
      <header className="forgot__header">
        <Logo href="/" />
        <ArrowBackBtn src="/" />
      </header>
      <ForgotPasswordForm />
    </>
  );
};

export default forgot;
