import { BrowserRouter, StaticRouter } from "react-router-dom";
import { usePageContext } from "vike-react/usePageContext";
import { HelmetProvider } from "react-helmet-async";

import App from "../../App.jsx";
import ScrollToTop from "../components/ScrollToTop";
import "../../index.css";

export default function Page() {
  const { urlPathname } = usePageContext();
  const isServer = import.meta.env.SSR;

  const Router = isServer ? StaticRouter : BrowserRouter;
  const routerProps = isServer ? { location: urlPathname } : {};

  return (
    <HelmetProvider>
      <Router {...routerProps}>
        <ScrollToTop />
        <App />
      </Router>
    </HelmetProvider>
  );
}
