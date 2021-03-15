import "../styles/globals.scss";
import HeadLayout from "../layout/Head";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadLayout>
        <Component {...pageProps} />
      </HeadLayout>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </>
  );
}

export default MyApp;
