import { Link } from "react-router-dom";
import { Music, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl text-amber-500 font-bold">Big Mama Productions</span>
            <p className="font-display text-sm text-gray-400 mt-1">Big Mama Recording Studios</p>
            <p className="text-gray-500 text-sm italic mt-3">Knoxville's Sound. Since the '70s.</p>
            <div className="border-t border-amber-900 mt-4 pt-4"></div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Studio", to: "/studio" },
                { label: "Portfolio", to: "/testimonials" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-display text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="https://maps.google.com/?q=418+Highland+View+Drive+Knoxville+TN+37920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-400 transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>418 Highland View Drive, Knoxville, TN 37920</span>
              </a>
              <a href="tel:8657738466" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" /> (865) 773-8466
              </a>
            </div>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Follow Our Work</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="https://soundcloud.com/big-mama-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Music className="w-4 h-4" /> SoundCloud
              </a>
              <a
                href="https://www.facebook.com/norbert.stovall.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                👍 Facebook
              </a>
              <a
                href="https://www.yelp.com/biz/big-mamas-recording-studio-knoxville"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                ⭐ Yelp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 border-t border-amber-900 py-4 text-center">
        <p className="text-gray-600 text-xs font-display">
          © Big Mama Productions. All Rights Reserved. | Knoxville, Tennessee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
