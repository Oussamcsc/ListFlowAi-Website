import React, { useState } from "react";
import { motion } from "framer-motion";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const MailingListSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setEmail("");
    setIsSubscribing(false);

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <>
      <section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20 px-6 lg:px-8">
        {/* Simple animated floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/50 rounded-full animate-bounce"></div>
        </div>

        <h2 className="mx-auto text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-sora mb-6 relative z-10">
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Weapons-Grade AI Solutions
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg text-muted-foreground font-space-grotesk">
          Stay updated with the latest AI automation insights and exclusive
          updates.
        </p>

        <motion.div
          className="mx-auto mt-10 max-w-lg space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary CTA - Newsletter */}
          <form
            className="flex max-w-md mx-auto gap-x-4 flex-col sm:flex-row gap-y-4 sm:gap-y-0"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribing || isSubscribed}
              className="min-w-0 flex-auto rounded-md bg-muted/20 px-3.5 py-2 text-base text-foreground outline outline-1 -outline-offset-1 outline-border placeholder:text-muted-foreground focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm transition-all duration-200 w-full sm:w-auto"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              disabled={isSubscribing || isSubscribed || !email}
              className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
            >
              {isSubscribing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-1 inline-block"></div>
                  Subscribing...
                </>
              ) : isSubscribed ? (
                "✓ Subscribed!"
              ) : (
                "Get AI Insights"
              )}
            </button>
          </form>

          {/* Secondary CTA - Free Assessment */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3 font-space-grotesk">
              Or get a personalized assessment of your automation potential
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/60 font-space-grotesk"
            >
              Get Free AI ROI Assessment →
            </button>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-md text-center text-sm text-muted-foreground">
          We care about your data. Read our{" "}
          <a
            href="/privacy"
            className="whitespace-nowrap font-semibold text-primary hover:text-primary/80 transition-colors duration-200 underline cursor-pointer"
          >
            privacy policy
          </a>
          .
        </p>

        {/* Background gradient circle */}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#newsletter-gradient)"
            fillOpacity="0.1"
          />
          <defs>
            <radialGradient
              id="newsletter-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop
                offset="1"
                stopColor="hsl(var(--secondary))"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
        </svg>
      </section>

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
};

export default MailingListSection;
