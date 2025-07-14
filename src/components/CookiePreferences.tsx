import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({ isOpen, onClose, onSave }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  });

  const handleToggle = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSave = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    localStorage.setItem("cookieConsent", "customized");
    onSave(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsent", "accepted");
    onSave(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyEssential);
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyEssential));
    localStorage.setItem("cookieConsent", "rejected");
    onSave(onlyEssential);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground font-sora">
                Cookie Preferences
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              You can customize your preferences below.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                  <div className="w-11 h-6 bg-primary rounded-full relative">
                    <div className="w-5 h-5 bg-primary-foreground rounded-full absolute top-0.5 right-0.5 transition-transform" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Required for basic site functionality. Cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 rounded-lg bg-muted/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-11 h-6 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 rounded-lg bg-muted/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-11 h-6 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Used to deliver personalized advertisements and track campaign performance.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="p-4 rounded-lg bg-muted/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">Functional Cookies</h3>
                  <button
                    onClick={() => handleToggle('functional')}
                    className={`w-11 h-6 rounded-full transition-colors ${
                      preferences.functional ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      preferences.functional ? 'translate-x-5' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Enable enhanced functionality like chat widgets and social media features.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors font-medium"
              >
                Reject All
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors font-medium"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Accept All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferences;
