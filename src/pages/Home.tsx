import { Flower2, Camera, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { InquiryForm } from "../components/InquiryForm";
import { ServiceCard } from "../components/ServiceCard";
import { siteContent } from "../constants/site-content";

export const Home = () => {
  return (
    <main className="bg-ivory text-charcoal">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/portfolio">
            <ServiceCard
              title={siteContent.services.flowerWalls.title}
              description={siteContent.services.flowerWalls.description}
              imageUrl={siteContent.services.flowerWalls.items[0].image}
              icon={<Flower2 className="h-5 w-5" />}
            />
          </Link>
          <Link to="/custom-neon">
            <ServiceCard
              title={siteContent.services.customNeonSigns.title}
              description={siteContent.services.customNeonSigns.description}
              imageUrl={siteContent.services.customNeonSigns.items[0].image}
              icon={<Zap className="h-5 w-5" />}
            />
          </Link>
          <Link to="/pricing">
            <ServiceCard
              title={siteContent.services.photoBooths.title}
              description={siteContent.services.photoBooths.description}
              imageUrl={siteContent.services.photoBooths.items[0].image}
              icon={<Camera className="h-5 w-5" />}
            />
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white/40 to-ivory py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              As Featured In
            </p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal">
              Press & Recognition
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteContent.featuredIn.map((feature) => (
              <div
                key={feature.name}
                className="rounded-3xl border border-white/80 bg-white/90 p-8 text-center shadow-lg shadow-charcoal/5 transition hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-champagne/20">
                  <span className="text-2xl">★</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal">{feature.name}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              Signature Walls
            </p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal">
              Specialty and featured installations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Each wall is handcrafted with couture florals and refined textures. Choose
              from timeless neutrals, modern blush, or statement botanicals.
            </p>
          </div>
          <div className="grid gap-4">
            {siteContent.services.flowerWalls.items.map((wall) => (
              <div
                key={wall.name}
                className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/70 p-4"
              >
                <img
                  src={wall.image}
                  alt={wall.name}
                  className="h-20 w-24 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                    {wall.type}
                  </p>
                  <p className="font-serif text-lg text-charcoal">{wall.name}</p>
                  <p className="text-sm text-charcoal/70">{wall.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </main>
  );
};
