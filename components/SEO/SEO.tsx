import Head from "next/head";
import React from "react";

const SEO = (props) => {
  const { title } = props;

  const description =
    "Somos una academia de trading con expertos de mas de 5 años de experiencia, disponemos de varios servicios para que comienzes a ganar dinero hoy mismo con el trading";

  return (
    <Head>
      <title>RedTrader - {title || "Academia de Trading Profesional"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {props.children}
    </Head>
  );
};

export default SEO;
