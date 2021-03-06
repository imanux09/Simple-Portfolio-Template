import "../styles/globals.css";
import "../styles/Home.module.css";
import "@fontsource/spartan";

import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
