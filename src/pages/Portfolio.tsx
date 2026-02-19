import { useState } from "react";
import { siteContent } from "../constants/site-content";

export const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filteredItems =
    active === "All"
      ? siteContent.portfolio.items
      : siteContent.portfolio.items.filter((item) => item.category === active);

  return (
    <main className="bg-ivory text-charcoal">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Portfolio</p>
        <h1 className="mt-3 font-serif text-4xl text-charcoal">
          Luxury floral moments
        </h1>

        <div className="mt-10 flex flex-wrap gap-3">
          {["All", ...siteContent.portfolio.categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.25em] transition ${
                active === category
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/20 bg-white/70 text-charcoal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-xl shadow-charcoal/10"
            >
              <img src={item.image} alt={item.category} className="w-full" />
              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
