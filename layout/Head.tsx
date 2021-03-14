import Head from "next/head";

const HeadLayout = (props) => {
  return (
    <Head>
      <title>RedTrader - Academia de trading online</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="favicon.png" />
      {props.children}
    </Head>
  );
};

export default HeadLayout;
