import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground font-sora">Privacy Policy</h2>
                  <p className="text-sm text-muted-foreground">How we protect your data</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 group"
              >
                <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Information We Collect
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    subscribe to our newsletter, or contact us for support. This may include your name, 
                    email address, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    How We Use Your Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">To provide, maintain, and improve our AI automation services</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">To send you newsletters and updates about our products</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">To respond to your comments, questions, and requests</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">To monitor and analyze trends and usage patterns</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Information Sharing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information 
                    with trusted service providers who assist us in operating our website and conducting our business.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Data Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Your Rights
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information. You may also 
                    opt out of receiving promotional communications from us at any time.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 font-sora">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Contact Us
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a 
                      href="mailto:privacy@listflowai.com" 
                      className="text-primary hover:text-primary/80 transition-colors font-medium underline decoration-primary/30 hover:decoration-primary/60"
                    >
                      privacy@listflowai.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-muted/20 flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-border text-muted-foreground hover:bg-muted/50 transition-all duration-200 text-sm font-medium"
                >
                  Close
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-sm font-semibold shadow-sm"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
