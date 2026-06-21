import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Ticker from "./Ticker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getEncycloTheme } from "../data/encycloThemes";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const focus = pathname === "/defi";
  const theme = getEncycloTheme(pathname);
  return (
    <div className="min-h-screen flex flex-col" style={{ background: theme.tint }}>
      <ScrollToTop />
      {!focus && <Ticker />}
      {!focus && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
