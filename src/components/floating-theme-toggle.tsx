import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

export function FloatingThemeToggle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the floating toggle when scrolled down 200px
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-full p-2 shadow-lg">
            <ModeToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
