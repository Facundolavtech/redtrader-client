import React from "react";
import ArrowBackBtn from "../components/BackArrow";
import SEO from "../components/SEO";

const _error = () => {
  return (
    <>
      <SEO title="404" />

      <h1
        style={{
          fontWeight: "normal",
          textAlign: "center",
          margin: "auto",
          marginTop: "50px",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Pagina no encontrada
      </h1>
      <div
        style={{
          width: "100%",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackBtn src="/" />
        <span
          style={{
            fontWeight: "normal",
            fontSize: "1.3em",
            marginLeft: "20px",
          }}
        >
          Volver
        </span>
      </div>
    </>
  );
};

export default _error;
