import ForgotPasswordForm from "../components/ForgotPassword";
import Header from "../components/Header";
import Logo from "../components/Header/Logo";
import ArrowBackBtn from "../components/BackArrow";

const forgot = () => {
  return (
    <>
      <Header classes="forgot__header">
        <ArrowBackBtn src="/" />
        <Logo classes="" />
      </Header>
      <ForgotPasswordForm />
    </>
  );
};

export default forgot;
