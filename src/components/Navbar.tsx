import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { siteContent } from "../constants/site-content";

const linkBase =
  "text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-charcoal transition";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-ivory/70 border-b border-white/40"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-charcoal" onClick={() => setMobileMenuOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20">
            <Sparkles className="h-5 w-5 text-champagne" />
          </span>
          <div className="leading-none">
            <p className="font-serif text-lg tracking-wide">{siteContent.brand.name}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60">
              Luxury Rentals
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {siteContent.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-charcoal" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        
        {/* Desktop Book Now Button */}
        <Link
          to="/pricing"
          className="hidden md:block rounded-full bg-charcoal px-5 py-2 text-xs uppercase tracking-[0.25em] text-ivory shadow-lg shadow-charcoal/20 transition hover:-translate-y-0.5"
        >
          {siteContent.hero.cta}
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-full bg-charcoal p-2 text-ivory"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-b border-white/40 bg-ivory/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-4">
              {siteContent.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm uppercase tracking-[0.2em] py-2 ${
                      isActive ? "text-charcoal font-medium" : "text-charcoal/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-full bg-charcoal px-5 py-3 text-xs uppercase tracking-[0.25em] text-ivory shadow-lg shadow-charcoal/20"
              >
                {siteContent.hero.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
