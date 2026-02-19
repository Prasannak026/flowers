import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { siteContent } from "../constants/site-content";

export const CustomNeon = () => {
  const [message, setMessage] = useState("Forever in Bloom");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Neon sign request:", message);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setMessage("Forever in Bloom");
    }, 3000);
  };

  return (
    <main className="bg-charcoal text-ivory">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${siteContent.services.customNeonSigns.items[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-10 px-6 py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ivory/60">
              Custom Neon
            </p>
            <h1 className="mt-3 font-serif text-4xl text-ivory">
              Glow against couture florals
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-ivory/70">
              Design a bespoke neon message to pair with your flower wall. Each sign is
              handcrafted and tuned to a warm champagne glow.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-black/50 p-8">
              <div
                className="text-3xl font-serif md:text-5xl"
                style={{
                  color: "#D4AF37",
                  textShadow: siteContent.services.customNeonSigns.neonShadow,
                }}
              >
                {message}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <CheckCircle2 className="h-12 w-12 text-champagne mb-4" />
                  <h3 className="font-serif text-xl text-ivory">Request Sent!</h3>
                  <p className="mt-2 text-sm text-ivory/70">
                    We'll create a custom quote for your neon sign.
                  </p>
                </div>
              ) : (
                <>
                  <label className="text-xs uppercase tracking-[0.3em] text-ivory/60">
                    Your Message
                  </label>
                  <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="mt-4 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-ivory focus:border-ivory focus:outline-none"
                  />
                  <p className="mt-4 text-sm text-ivory/60">
                    Choose script, size, and color to match your wall palette.
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-6 w-full rounded-full bg-champagne px-6 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition hover:bg-champagne/90"
                  >
                    Request Quote
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
