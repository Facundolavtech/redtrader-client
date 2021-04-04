import "../styles/globals.scss";
import { useEffect } from "react";
import HeadLayout from "../layout/Head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../libs/mui-theme";
import { CookiesProvider } from "react-cookie";

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
    </>
  );
}

export default MyApp;
