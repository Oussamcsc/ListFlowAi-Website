import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";

const TrustBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem("trustBannerDismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show banner after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("trustBannerDismissed", "true");
  };

  const handleBookDemo = () => {
    window.open(
      "https://calendly.com/oabouyahia/free-ai-automation-demo-call",
      "_blank",
    );
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50"
          role="banner"
          aria-label="Trust guarantee banner"
        >
          <div className="bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-md rounded-xl shadow-2xl border border-primary/30 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground font-space-grotesk">
                  RISK-FREE GUARANTEE
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDismiss}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10 h-6 w-6 p-0"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="px-4 pb-4 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                  <span className="text-primary-foreground font-semibold text-sm font-space-grotesk">
                    30-Day Domination Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90 text-sm font-space-grotesk">
                    No contracts. No BS. Just results.
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleBookDemo}
                  className="w-full bg-white/20 hover:bg-white/30 text-primary-foreground border border-white/30 hover:border-white/50 font-bold text-sm py-2 font-space-grotesk transition-all duration-200"
                  size="sm"
                >
                  Book Your Risk-Free Demo
                </Button>
              </motion.div>
            </div>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-primary/50 pointer-events-none"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrustBanner;
