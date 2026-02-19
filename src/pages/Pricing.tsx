import { siteContent } from "../constants/site-content";

export const Pricing = () => {
  return (
    <main className="bg-ivory text-charcoal">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Pricing</p>
        <h1 className="mt-3 font-serif text-4xl text-charcoal">
          Luxe wall sizing
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {siteContent.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-charcoal/10"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                {tier.size}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-charcoal">
                {tier.name}
              </h2>
              <p className="mt-4 text-3xl font-semibold text-charcoal">
                {tier.price}
              </p>
              <p className="mt-3 text-sm text-charcoal/70">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-charcoal/70">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
