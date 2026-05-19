import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="rainbow-border-top" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <span className="font-logo text-2xl rainbow-gradient-text">Mississippi Seoul</span>
              <p className="font-display text-sm text-gray-400 mt-1">Music Lessons</p>
              <p className="text-gray-500 text-sm italic mt-3">Making music fun, one lesson at a time.</p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.instagram.com/mississippi.seoul.music/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rainbow-pink transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/lacy.quin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rainbow-blue transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "Lessons", to: "/lessons" },
                  { label: "About", to: "/about" },
                  { label: "FAQ", to: "/faq" },
                  { label: "Contact", to: "/contact" },
                  { label: "Book a Lesson", to: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="font-display text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="tel:5125347753" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> (512) 534-7753
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Manhattan, NY
                </span>
                <a
                  href="https://www.instagram.com/mississippi.seoul.music/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rainbow-pink transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @mississippi.seoul.music
                </a>
                <a
                  href="https://www.facebook.com/lacy.quin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rainbow-blue transition-colors"
                >
                  <Facebook className="w-4 h-4" /> Lacy Quin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ backgroundColor: "#111111" }} className="py-4 text-center">
          <p className="text-gray-600 text-xs font-display">
            ♩ © 2025 Mississippi Seoul Music Lessons. All Rights Reserved. ♪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
