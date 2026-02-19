import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "../constants/site-content";

export const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px", once: true });

  return (
    <section
      className="relative overflow-hidden bg-ivory"
      style={{
        backgroundImage: `url(${siteContent.hero.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-ivory/70" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">
            {siteContent.brand.tagline}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-6xl">
            {siteContent.hero.heading}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80 md:text-lg">
            {siteContent.hero.subheading}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#inquiry"
              className="rounded-full bg-charcoal px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory shadow-lg shadow-charcoal/30"
            >
              {siteContent.hero.cta}
            </a>
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
              Cleveland, Ohio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
