import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { siteContent } from "../constants/site-content";

const linkBase =
  "text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-charcoal transition";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-ivory/70 border-b border-white/40"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-charcoal">
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
        <Link
          to="/pricing"
          className="rounded-full bg-charcoal px-5 py-2 text-xs uppercase tracking-[0.25em] text-ivory shadow-lg shadow-charcoal/20 transition hover:-translate-y-0.5"
        >
          {siteContent.hero.cta}
        </Link>
      </nav>
    </motion.header>
  );
};
