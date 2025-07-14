import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      question: "What kind of results can I expect?",
      answer:
        "Our clients typically see 3-5x increase in qualified leads within the first 30 days, with 80% less time spent on manual follow-ups.",
    },
    {
      question: "Do I need technical expertise?",
      answer:
        "Not at all. We set everything up for you and provide training. If you can send an email, you can use ListFlowAI.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not seeing results, we'll refund your investment—no questions asked.",
    },
    {
      question: "How does the AI automation work?",
      answer:
        "Our AI analyzes your ideal customer profile, creates personalized outreach campaigns, handles follow-ups automatically, and learns from responses to improve over time.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>
          
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 divide-y divide-border"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-foreground hover:text-primary transition-colors duration-200"
                    aria-controls={`faq-${index}`}
                    aria-expanded={openIndex === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6 text-primary" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <motion.dd
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 pr-12"
                    id={`faq-${index}`}
                  >
                    <p className="text-base leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.dd>
                )}
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
