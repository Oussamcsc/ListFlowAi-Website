import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "Automate ruthlessly.<br />Scale fearlessly.",
  subtitle = "AI that works while you sleep. Built for closers. Powered by automation.",
  ctaText = "Book a Demo Call",
  ctaLink = "#demo",
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-12 sm:pt-16"
    >
      {/* Sophisticated background pattern inspired by Tailwind UI */}
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-border [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-muted/5">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero-grid-pattern)"
        />
      </svg>

      {/* Gradient background elements */}
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary/30 to-accent/30 opacity-30 dark:opacity-20"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      {/* Innovative floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/50 rounded-full animate-bounce"></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-5xl mx-auto px-4 sm:px-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Robot Character - Inside main content, with cool effects */}
          <motion.div
            className="absolute top-4 sm:top-6 left-2 sm:left-4 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-auto z-5 cursor-pointer"
            initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            animate={{
              scale: [1, 1.15, 0.95, 1.1, 1],
              y: [0, -8, 2, -5, 0],
              x: [0, 3, -3, 1, 0],
            }}
            whileHover={{
              scale: [1, 1.3, 1.2],
              filter: "brightness(1.3) saturate(1.5)",
              transition: {
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              },
            }}
            transition={{
              opacity: { duration: 1.2, delay: 0.5 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
            }}
          >
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <img
              src="/robot.png"
              alt="AI Robot"
              className="relative w-full h-full object-contain filter brightness-110 contrast-110"
            />
          </motion.div>

          {/* Left Side Avatar - Inside main content */}
          <motion.div
            className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-30 pointer-events-auto cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{
              x: [0, -8, 0],
              y: [0, -4, 0],
            }}
            whileHover={{
              scale: 1.15,
              x: -12,
              y: -8,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.2,
              x: -15,
              y: -10,
              transition: { duration: 0.2 },
            }}
            style={{
              animationDuration: "3.2s",
              animationIterationCount: "infinite",
            }}
          >
            <img
              src="/avatars/avatar3.png"
              alt="AI Agent Avatar Left"
              className="w-full h-full rounded-full border-2 sm:border-3 border-secondary/40 shadow-xl bg-background p-0.5 transition-all duration-300 hover:border-secondary/70"
            />
          </motion.div>

          {/* Right Side Avatar - Inside main content */}
          <motion.div
            className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-30 pointer-events-auto cursor-pointer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{
              x: [0, 8, 0],
              y: [0, -4, 0],
            }}
            whileHover={{
              scale: 1.15,
              x: 12,
              y: -8,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.2,
              x: 15,
              y: -10,
              transition: { duration: 0.2 },
            }}
            style={{
              animationDuration: "3.5s",
              animationIterationCount: "infinite",
            }}
          >
            <img
              src="/avatars/avatar4.png"
              alt="AI Agent Avatar Right"
              className="w-full h-full rounded-full border-2 sm:border-3 border-primary/40 shadow-xl bg-background p-0.5 transition-all duration-300 hover:border-primary/70"
            />
          </motion.div>

          {/* Single Avatar - Centered at top */}
          {/* Avatar 1 - Top Center */}
          <motion.div
            className="absolute -top-8 sm:-top-12 md:-top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-30 pointer-events-auto cursor-pointer"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            animate={{ y: [0, -8, 0] }}
            whileHover={{
              scale: 1.15,
              y: -12,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.2,
              y: -15,
              transition: { duration: 0.2 },
            }}
            style={{
              animationDuration: "3s",
              animationIterationCount: "infinite",
            }}
          >
            <img
              src="/avatars/avatar1.png"
              alt="AI Agent Avatar 1"
              className="w-full h-full rounded-full border-2 sm:border-3 border-primary/40 shadow-xl bg-background p-0.5 transition-all duration-300 hover:border-primary/70"
            />
          </motion.div>

          {/* Spinning loader and text below avatars */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 mt-8 sm:mt-12"
            variants={itemVariants}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="ai-loader scale-75 sm:scale-100">
                <div className="ai-loader__bar"></div>
                <div className="ai-loader__bar"></div>
                <div className="ai-loader__bar"></div>
                <div className="ai-loader__bar"></div>
                <div className="ai-loader__bar"></div>
                <div className="ai-loader__ball"></div>
              </div>
            </motion.div>
            <span className="text-accent font-bold text-sm sm:text-lg font-space-grotesk tracking-wider">
              ELITE AI AUTOMATION
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 font-sora glow-text leading-tight relative"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent relative">
              Automate ruthlessly.
              <br />
              Scale fearlessly.
            </span>
            {/* Doodle positioned below "Scale fearlessly." text */}
            <motion.div
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 sm:translate-y-6 md:translate-y-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none z-5"
              initial={{ opacity: 0, rotate: -90, scale: 0.3 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
              animate={{
                rotate: [0, 15, -15, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.1, 1],
              }}
              style={{
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
            >
              <img
                src="/doodle.png"
                alt="Decorative Doodle"
                className="w-full h-full object-contain opacity-80 filter brightness-110"
              />
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl font-space-grotesk font-medium leading-relaxed px-4"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* Enhanced Value Proposition Sub-headline */}
          <motion.div
            className="mb-8 sm:mb-10 max-w-4xl mx-auto px-4"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-primary/90 font-semibold font-space-grotesk mb-2">
              ...by implementing AI that generates qualified leads and slashes
              operational costs by 60%+
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground font-space-grotesk">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>24/7 Lead Qualification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Zero Manual Follow-ups</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Instant ROI Tracking</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center w-full max-w-md mx-auto sm:max-w-none space-y-4"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-full font-bold group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground transition-all duration-300 font-space-grotesk w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://calendly.com/oabouyahia/free-ai-automation-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Secondary CTA - Lower Commitment */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-space-grotesk w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Free AI ROI Assessment
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground font-space-grotesk text-center"
              variants={itemVariants}
            >
              No contracts. No BS. Just results.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-12 sm:mt-20 relative w-full max-w-4xl px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80"
                alt="AI Automation Dashboard"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Floating elements with enhanced mobile styling */}
            <motion.div
              className="absolute -top-4 sm:-top-8 -right-2 sm:-right-8 bg-card/80 backdrop-blur-md p-2 sm:p-4 rounded-xl shadow-neon-purple border border-neon-purple/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/30">
                  <span className="text-neon-purple text-xs sm:text-sm font-bold">
                    +47%
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-foreground font-space-grotesk">
                    Lead Conversion
                  </p>
                  <p className="text-xs text-muted-foreground font-space-grotesk hidden sm:block">
                    Ruthless efficiency
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-8 bg-background/80 backdrop-blur-md p-2 sm:p-4 rounded-xl shadow-neon-cyan border border-neon-cyan/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30">
                  <span className="text-neon-cyan text-xs sm:text-sm font-bold">
                    24/7
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-foreground font-space-grotesk">
                    AI Working
                  </p>
                  <p className="text-xs text-muted-foreground font-space-grotesk hidden sm:block">
                    While you sleep
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-3/4 -left-6 sm:-left-12 bg-background/80 backdrop-blur-md p-2 sm:p-3 rounded-xl shadow-lg border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-primary text-xs font-bold">∞</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground font-space-grotesk">
                    Scale
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
