import "../styles/globals.scss";
import HeadLayout from "../layout/Head";

function MyApp({ Component, pageProps }) {
  return (
    <HeadLayout>
      <Component {...pageProps} />
    </HeadLayout>
  );
}

export default MyApp;
