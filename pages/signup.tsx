import React from "react";
import SEO from "../components/SEO";
import SignUpStepper from "../components/Steppers/SignUpStepper";
import AuthForms from "../components/Auth/AuthForms";
import AuthHeader from "../components/UI/Header/AuthHeader";

const signup = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgb(245, 245, 245) !important;
        }
      `}</style>
      <SEO title="Registrarse" />
      <SignUpStepper step={0} />
      <AuthHeader />
      <AuthForms isSignIn={false} />
    </>
  );
};

export default signup;
