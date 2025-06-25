import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is ListFlowAI for?",
      answer:
        "Small service-business owners who want to automate outreach + follow-ups using AI—quick setup, no tech skills needed.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Most clients are up and running within 24-48 hours. We handle the technical setup while you focus on your business.",
    },
    {
      question: "What makes ListFlowAI different?",
      answer:
        "We specialize in service businesses with proven AI workflows that actually convert leads—not generic chatbots.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "Zero technical skills required. We set everything up and provide simple dashboards to track your results.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">FAQ</h4>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700/50">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between py-3 text-left hover:text-white transition-colors"
            >
              <span className="text-sm font-medium text-muted-foreground hover:text-white">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="pb-3"
              >
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <PricingSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <ContactSection />
      </motion.div>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ListFlowAI</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Intelligent AI-driven solutions to help service-based businesses
              streamline operations, capture leads, and automate workflows with
              ease and reliability.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/listflowai"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <FAQSection />
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} ListFlowAI. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
