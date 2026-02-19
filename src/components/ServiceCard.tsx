import { motion } from "framer-motion";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  icon?: ReactNode;
};

export const ServiceCard = ({
  title,
  description,
  imageUrl,
  icon,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/50 bg-white/70 shadow-xl shadow-charcoal/10 cursor-pointer"
    >
      <div
        className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex flex-col gap-4 px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-champagne/20 text-champagne">
            {icon}
          </span>
          <h3 className="font-serif text-xl text-charcoal">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-charcoal/70">{description}</p>
        <div className="h-px bg-gradient-to-r from-champagne/40 to-transparent" />
      </div>
    </motion.div>
  );
};
