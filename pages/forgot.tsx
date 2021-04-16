import ForgotPasswordForm from "../components/ForgotPassword";
import Header from "../components/Header";
import Logo from "../components/Header/Logo";


const forgot = () => {
  return (
    <>
      <Header classes="forgot__header">
        <Logo classes="" />
      </Header>
      <ForgotPasswordForm />
    </>
  );
};

export default forgot;
