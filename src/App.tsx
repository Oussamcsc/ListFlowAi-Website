import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./components/home";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="listflow-ui-theme">
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <ScrollToTop />
          <CookieConsent />
        </>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
