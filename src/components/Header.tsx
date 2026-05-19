import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/", hoverColor: "hover:text-amber-400" },
  { label: "About", to: "/about", hoverColor: "hover:text-amber-400" },
  { label: "Services", to: "/services", hoverColor: "hover:text-amber-400" },
  { label: "Studio", to: "/studio", hoverColor: "hover:text-amber-400" },
  { label: "Portfolio", to: "/portfolio", hoverColor: "hover:text-amber-400" },
  { label: "Testimonials", to: "/testimonials", hoverColor: "hover:text-amber-400" },
  { label: "Contact", to: "/contact", hoverColor: "hover:text-amber-400" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 border-b border-amber-900 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl md:text-2xl text-amber-500 font-bold">
            Big Mama Productions
          </span>
          <span className="font-display text-xs md:text-sm text-gray-400 font-semibold -mt-1">
            EST. 1970s · KNOXVILLE, TN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-sm font-semibold transition-colors duration-200 ${link.hoverColor} ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:8657738466" className="font-display text-xs text-amber-500 flex items-center gap-1 hover:text-amber-400">
            <Phone className="w-3 h-3" />
            (865) 773-8466
          </a>
          <Link
            to="/contact"
            className="bg-amber-600 text-black text-xs font-bold px-5 py-2 hover:bg-amber-500 rounded-sm transition-colors"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6 text-amber-500" /> : <Menu className="w-6 h-6 text-amber-500" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-amber-900 animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display text-base font-semibold py-2 px-3 rounded transition-colors text-gray-100 ${link.hoverColor} ${
                  location.pathname === link.to ? "bg-amber-900" : ""
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8657738466"
              className="font-display text-sm text-amber-500 flex items-center gap-2 py-2 px-3"
            >
              <Phone className="w-4 h-4" /> (865) 773-8466
            </a>
            <Link
              to="/contact"
              className="bg-amber-600 text-black text-center py-2 font-bold mt-2 rounded-sm hover:bg-amber-500 transition-colors"
            >
              Book a Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
