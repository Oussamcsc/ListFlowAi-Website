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
  title = "Automate ruthlessly. Scale fearlessly.",
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black cyber-grid"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-black to-neon-cyan/10 z-0"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-neon-purple/20 blur-3xl"
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
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-neon-cyan/20 blur-3xl"
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
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-neon-red/10 blur-3xl"
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
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={itemVariants}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-8 w-8 text-neon-purple" />
            </motion.div>
            <span className="text-neon-cyan font-bold text-lg font-space-grotesk tracking-wider">
              ELITE AI AUTOMATION
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 font-sora glow-text"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl font-space-grotesk font-medium leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full font-bold group bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple transition-all duration-300 shadow-neon-purple hover:shadow-neon-cyan animate-glow-pulse font-space-grotesk"
                asChild
              >
                <a
                  href="https://calendly.com/oabouyahia/free-ai-automation-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.p
              className="text-sm text-gray-400 font-space-grotesk"
              variants={itemVariants}
            >
              No contracts. No BS. Just results.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-20 relative w-full max-w-4xl"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-neon-purple/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80"
                alt="AI Automation Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10"></div>
            </motion.div>

            {/* Floating elements with enhanced styling */}
            <motion.div
              className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-neon-purple border border-neon-purple/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/30">
                  <span className="text-neon-purple text-sm font-bold">
                    +47%
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white font-space-grotesk">
                    Lead Conversion
                  </p>
                  <p className="text-xs text-gray-400 font-space-grotesk">
                    Ruthless efficiency
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-neon-cyan border border-neon-cyan/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30">
                  <span className="text-neon-cyan text-sm font-bold">24/7</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white font-space-grotesk">
                    AI Working
                  </p>
                  <p className="text-xs text-gray-400 font-space-grotesk">
                    While you sleep
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-12 bg-black/80 backdrop-blur-md p-3 rounded-xl shadow-neon-red border border-neon-red/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-neon-red/20 flex items-center justify-center border border-neon-red/30">
                  <span className="text-neon-red text-xs font-bold">∞</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white font-space-grotesk">
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
