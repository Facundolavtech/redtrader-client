import "../styles/globals.scss";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/mui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../context/Auth/AuthProvider";
import store from "../redux/store";
import { Provider } from "react-redux";
import SEO from "../components/SEO";

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
      <SEO />
      <AuthProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </AuthProvider>
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
