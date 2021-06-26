import React from "react";
import SEO from "../components/SEO";
import AuthForms from "../components/Auth/AuthForms";

const signin = () => {
  return (
    <>
      <SEO title="Iniciar sesion" />
      <AuthForms isSignIn={true} />
    </>
  );
};

export default signin;
