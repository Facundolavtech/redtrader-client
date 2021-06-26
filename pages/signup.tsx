import React from "react";
import SEO from "../components/SEO";
import SignUpStepper from "../components/Steppers/SignUpStepper";
import AuthForms from "../components/Auth/AuthForms";

const signup = () => {
  return (
    <>
      <SEO title="Registrarse" />
      <SignUpStepper step={0} />
      <AuthForms isSignIn={false} />
    </>
  );
};

export default signup;
