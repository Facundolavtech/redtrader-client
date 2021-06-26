import ForgotPasswordForm from "../components/ForgotPassword";
import Logo from "../components/UI/Logo/Logo";
import SEO from "../components/SEO";

const forgot = () => {
  return (
    <>
      <SEO title="Olvide mi contraseña" />
      <header className="forgot__header">
        <Logo href="/" />
      </header>
      <ForgotPasswordForm />
    </>
  );
};

export default forgot;
