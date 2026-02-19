import { siteContent } from "../constants/site-content";

export const About = () => {
  return (
    <main className="bg-ivory text-charcoal">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">About</p>
            <h1 className="mt-3 font-serif text-4xl text-charcoal">
              {siteContent.about.title}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/70">
              {siteContent.about.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-charcoal/70">
              {siteContent.about.highlights.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-6 hidden h-full w-full rounded-3xl border border-champagne/40 bg-champagne/10 lg:block" />
            <img
              src={siteContent.about.image}
              alt="Denisha"
              className="relative z-10 h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              Craft
            </p>
            <h2 className="mt-3 font-serif text-2xl">Details matter</h2>
            <p className="mt-4 text-sm text-charcoal/70">
              From luxury florals to modern neon, every texture is curated to feel
              layered, romantic, and rich in dimension.
            </p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              Experience
            </p>
            <h2 className="mt-3 font-serif text-2xl">White-glove service</h2>
            <p className="mt-4 text-sm text-charcoal/70">
              Our team handles delivery, styling, and teardown so you can stay focused
              on hosting unforgettable celebrations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
