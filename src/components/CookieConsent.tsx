import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useTheme } from "./theme-provider";

interface CookiePreferences {
  necessary: boolean;
  performance: boolean;
  targeting: boolean;
  functionality: boolean;
}

interface UserPreferences extends CookiePreferences {
  theme: "light" | "dark";
}

const CookieConsent = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    performance: false,
    targeting: false,
    functionality: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      targeting: true,
      functionality: true,
    };
    
    // Save cookies and theme preference
    const userPreferences: UserPreferences = {
      ...allAccepted,
      theme: theme,
    };
    
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const onlyNecessary = {
      necessary: true,
      performance: false,
      targeting: false,
      functionality: false,
    };
    
    // Save minimal cookies and theme preference
    const userPreferences: UserPreferences = {
      ...onlyNecessary,
      theme: theme,
    };
    
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyNecessary));
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    setIsVisible(false);
  };

  const handleSaveClose = () => {
    // Save custom cookie preferences and theme preference
    const userPreferences: UserPreferences = {
      ...preferences,
      theme: theme,
    };
    
    localStorage.setItem("cookieConsent", "customized");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-50"
        role="dialog"
        aria-label="Cookie consent dialog"
        aria-live="assertive"
      >
        <div className="bg-background border border-border rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <h3 className="text-lg font-semibold">This website uses cookies</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground h-6 w-6 p-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to personalise content, ads and to analyse our traffic. Your 
              theme preference will also be saved for future visits.{" "}
              <a 
                href="/privacy" 
                className="text-primary hover:underline font-medium"
                aria-label="Read more about our privacy policy"
              >
                Read more
              </a>
            </p>

            {/* Cookie Categories - Only show when details are expanded */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-3 border-t border-border/50 pt-4"
                >
                  {[
                    { key: 'necessary' as const, label: 'Strictly necessary', disabled: true },
                    { key: 'performance' as const, label: 'Performance', disabled: false },
                    { key: 'targeting' as const, label: 'Targeting', disabled: false },
                    { key: 'functionality' as const, label: 'Functionality', disabled: false },
                  ].map(({ key, label, disabled }) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox
                        id={key}
                        checked={preferences[key]}
                        disabled={disabled}
                        onCheckedChange={() => togglePreference(key)}
                        className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label 
                        htmlFor={key}
                        className="text-sm font-medium cursor-pointer flex-1"
                      >
                        {label}
                        {disabled && (
                          <span className="text-xs text-muted-foreground ml-1">(Always active)</span>
                        )}
                      </label>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleDeclineAll}
                  className="flex-1 text-sm h-8"
                  size="sm"
                >
                  Decline all
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 text-sm h-8 bg-primary hover:bg-primary/90"
                  size="sm"
                >
                  Accept all
                </Button>
              </div>
              
              {showDetails && (
                <Button
                  variant="outline"
                  onClick={handleSaveClose}
                  className="w-full text-sm h-8"
                  size="sm"
                >
                  Save & Close
                </Button>
              )}

              {/* Show Details Toggle */}
              <Button
                variant="ghost"
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted text-sm h-8"
                size="sm"
              >
                <Settings className="w-4 h-4" />
                {showDetails ? "Hide details" : "Show details"}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;