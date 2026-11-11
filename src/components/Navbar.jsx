import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-[#f5f1ea]/95 backdrop-blur-md border-b border-[#1e3a5f]/10" : "bg-[#f5f1ea]"}`}
    >
      <div className="container-edit flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="brand-logo-link" className="flex items-center gap-3">
          <img
            src={SITE.logo}
            alt={SITE.full}
            className="h-12 md:h-16 w-auto mix-blend-multiply brightness-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide link-underline ${isActive ? "text-[#d97334]" : "text-[#1e3a5f] hover:text-[#d97334]"}`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" data-testid="nav-cta-contact" className="btn-accent">
            Talk to a Partner
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 text-[#1e3a5f]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-[#1e3a5f]/10 bg-[#f5f1ea]">
          <nav className="container-edit py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) => `font-body text-base ${isActive ? "text-[#d97334]" : "text-[#1e3a5f]"}`}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" data-testid="mobile-cta-contact" className="btn-accent w-fit mt-2">
              Talk to a Partner
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
