import "../styles/globals.scss";
import { useEffect } from "react";
import HeadLayout from "../layout/Head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../libs/mui-theme";
import { CookiesProvider } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <HeadLayout />
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CookiesProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar="false"
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange={false}
        closeOnClick={false}
        pauseOnHover={false}
      ></ToastContainer>
    </>
  );
}

export default MyApp;
