import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SITE } from "../lib/site";

const TITLES = {
  "/": "Chartered Accountants in Yamunanagar",
  "/about": "About the Firm",
  "/services": "Services",
  "/industries": "Industries",
  "/contact": "Contact",
};

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = `${TITLES[pathname] || "Page not found"} | ${SITE.name}`;
  }, [pathname]);

  // Jump to the linked section (e.g. /services#fema), otherwise start at the top.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1ea]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
