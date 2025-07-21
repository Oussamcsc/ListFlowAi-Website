import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is ListFlowAI for?",
      answer:
        "ListFlowAI is designed for ambitious service-business owners, consultants, agencies, and B2B companies who are tired of manual processes eating their profits. Whether you're a solo entrepreneur or managing a team of 50+, our AI automation solutions scale with your business. Perfect for businesses generating $100K+ annually who want to break through growth plateaus and achieve market domination through intelligent automation.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Most clients are operational within 24-48 hours. Here's our battle-tested process: Day 1 - Initial consultation and system audit. Day 2 - AI implementation and integration with your existing tools. Day 3-7 - Testing, optimization, and team training. Week 2 - Full deployment with 24/7 monitoring. We handle 100% of the technical setup while you focus on running your business. No downtime, no disruption, just results.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Our clients typically see transformational results within 30 days: 3-5x increase in qualified leads, 60-80% reduction in operational costs, 200%+ productivity improvements, and 50-73% higher conversion rates. Marcus from Apex Consulting went from 12-hour days to 4-hour power sessions while tripling revenue. Victoria at Empire Digital saw 73% conversion rate explosion in month one. These aren't outliers—they're the standard when you weaponize your business with AI.",
    },
    {
      question: "Do I need technical expertise?",
      answer:
        "Absolutely not. Our 'white-glove' implementation means you don't touch a single line of code. We integrate with your existing CRM, email platforms, and business tools seamlessly. Your team gets comprehensive training, ongoing support, and access to our 24/7 help desk. If you can send an email and use basic business software, you can dominate with ListFlowAI. We've successfully onboarded 70-year-old business owners and tech-phobic executives.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer an industry-leading 30-day domination guarantee. If you don't see measurable improvements in lead quality, operational efficiency, or cost reduction within 30 days, we'll refund 100% of your investment—no questions, no hassles, no fine print. We're so confident in our results that less than 2% of clients request refunds, and most of those are due to business pivots, not performance issues.",
    },
    {
      question: "How does the AI automation work?",
      answer:
        "Our proprietary AI system operates on three core pillars: 1) INTELLIGENCE - Deep analysis of your ideal customer profile, competitor strategies, and market opportunities. 2) AUTOMATION - Personalized outreach campaigns, intelligent follow-up sequences, lead scoring, and CRM data management. 3) OPTIMIZATION - Continuous learning from every interaction, A/B testing messaging, and real-time performance adjustments. The AI works 24/7, never takes breaks, never makes mistakes, and gets smarter every day.",
    },
    {
      question: "What makes ListFlowAI different from other automation tools?",
      answer:
        "Most automation tools are glorified schedulers. ListFlowAI is a complete business intelligence system. While competitors offer basic email sequences, we provide psychological profiling, predictive analytics, and adaptive learning. Our AI doesn't just send messages—it understands human behavior, predicts buying patterns, and optimizes every touchpoint for maximum conversion. Plus, you get dedicated success managers, not chatbots.",
    },
    {
      question: "Can ListFlowAI integrate with my existing business tools?",
      answer:
        "Yes, seamlessly. We integrate with 200+ platforms including Salesforce, HubSpot, Pipedrive, Mailchimp, Zapier, Slack, and virtually every major CRM, email platform, and business tool. Our integration process is completely automated—no manual data entry, no system disruptions, no learning curves. Your existing workflows remain intact while becoming exponentially more powerful.",
    },
    {
      question: "What kind of support do I get?",
      answer:
        "You get elite-level support that matches our premium positioning: Dedicated success manager assigned to your account, 24/7 technical support via phone, email, and chat, monthly strategy sessions to optimize performance, quarterly business reviews with actionable insights, access to our private client community, and priority access to new features and updates. We don't just sell software—we partner with you for long-term domination.",
    },
    {
      question: "How much does ListFlowAI cost and what's included?",
      answer:
        "Our Assassin tier starts at $997/month and includes everything most businesses need to dominate their market: up to 5 automation workflows, AI-powered lead capture and qualification, competitor intelligence alerts, 10 hours of elite support, and full integration setup. For enterprises requiring unlimited automation and custom solutions, our Emperor tier offers bespoke pricing with white-labeled tools, 24/7 support, and monthly strategy sessions. Every plan includes our 30-day guarantee and no long-term contracts.",
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
                        <ChevronUp
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDown
                          className="h-6 w-6 text-muted-foreground"
                          aria-hidden="true"
                        />
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
