import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CalendarDays, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { siteContent } from "../constants/site-content";

const stepVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export const InquiryForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    venue: "",
    wall: siteContent.inquiry.wallOptions[0] ?? "",
  });

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setStep(0);
      setFormData({
        date: "",
        venue: "",
        wall: siteContent.inquiry.wallOptions[0] ?? "",
      });
    }, 3000);
  };

  const steps = [
    {
      label: "Event Date",
      icon: <CalendarDays className="h-5 w-5" />,
      content: (
        <input
          type="date"
          value={formData.date}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, date: event.target.value }))
          }
          className="w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      ),
    },
    {
      label: "Venue",
      icon: <MapPin className="h-5 w-5" />,
      content: (
        <input
          type="text"
          placeholder="Venue name"
          value={formData.venue}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, venue: event.target.value }))
          }
          className="w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      ),
    },
    {
      label: "Wall Selection",
      icon: <Sparkles className="h-5 w-5" />,
      content: (
        <select
          value={formData.wall}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, wall: event.target.value }))
          }
          className="w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        >
          {siteContent.inquiry.wallOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ),
    },
  ];

  const currentStep = steps[step];

  return (
    <section id="inquiry" className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-charcoal/10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-champagne mb-4" />
              <h2 className="font-serif text-3xl text-charcoal">Thank you!</h2>
              <p className="mt-3 text-sm text-charcoal/70">
                Your inquiry has been received. We'll be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
                Event Inquiry
              </p>
              <h2 className="mt-3 font-serif text-3xl text-charcoal">
                Start your luxury booking
              </h2>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.label}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-charcoal">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20 text-champagne">
                        {currentStep.icon}
                      </span>
                      <h3 className="font-serif text-xl">{currentStep.label}</h3>
                    </div>
                    {currentStep.content}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                  disabled={step === 0}
                  className="text-xs uppercase tracking-[0.25em] text-charcoal/60 transition hover:text-charcoal disabled:opacity-30"
                >
                  Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    className="rounded-full bg-charcoal px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory transition hover:bg-charcoal/90"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-full bg-champagne px-6 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition hover:bg-champagne/90"
                  >
                    Submit Inquiry
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
