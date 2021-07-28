import React from "react";
import SEO from "../components/SEO";
import AuthForms from "../components/Auth/AuthForms";
import AuthHeader from "../components/UI/Header/AuthHeader";

const signin = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgb(245, 245, 245) !important;
        }
      `}</style>
      <SEO title="Iniciar sesion" />
      <AuthHeader />
      <AuthForms isSignIn={true} />
    </>
  );
};

export default signin;
