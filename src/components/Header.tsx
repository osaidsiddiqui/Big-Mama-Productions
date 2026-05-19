import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/", hoverColor: "hover:text-rainbow-blue" },
  { label: "Lessons", to: "/lessons", hoverColor: "hover:text-rainbow-pink" },
  { label: "About", to: "/about", hoverColor: "hover:text-rainbow-orange" },
  { label: "FAQ", to: "/faq", hoverColor: "hover:text-rainbow-green" },
  { label: "Contact", to: "/contact", hoverColor: "hover:text-rainbow-purple" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md rainbow-border-bottom" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-logo text-xl md:text-2xl rainbow-gradient-text">
            Mississippi Seoul
          </span>
          <span className="font-display text-xs md:text-sm text-muted-foreground font-semibold -mt-1">
            Music Lessons
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
          <a href="tel:5125347753" className="font-display text-xs text-muted-foreground flex items-center gap-1">
            <Phone className="w-3 h-3" />
            (512) 534-7753
          </a>
          <Link
            to="/contact"
            className="pill-btn bg-rainbow-red text-white text-xs px-5 py-2 hover:opacity-90"
          >
            Book a Lesson →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display text-base font-semibold py-2 px-3 rounded-lg transition-colors ${link.hoverColor} ${
                  location.pathname === link.to ? "bg-muted" : ""
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {["🎹", "🎤", "🎸", "🪕", "📞"][i]} {link.label}
              </Link>
            ))}
            <a
              href="tel:5125347753"
              className="font-display text-sm text-muted-foreground flex items-center gap-2 py-2 px-3"
            >
              <Phone className="w-4 h-4" /> (512) 534-7753
            </a>
            <Link
              to="/contact"
              className="pill-btn bg-rainbow-red text-white text-center mt-2"
            >
              Book a Lesson →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
