import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const phases = [
    {
      phase: "Discovery & Audit",
      duration: "Day 1-2",
      icon: Target,
      description:
        "Deep-dive analysis of your current processes, pain points, and untapped opportunities",
      activities: [
        "Comprehensive business process audit",
        "Competitor intelligence gathering",
        "ROI potential assessment",
        "Custom strategy development",
      ],
    },
    {
      phase: "AI Implementation",
      duration: "Day 3-7",
      icon: Zap,
      description:
        "Seamless integration of AI automation into your existing workflows",
      activities: [
        "CRM and tool integrations",
        "AI workflow configuration",
        "Lead scoring system setup",
        "Automated sequence deployment",
      ],
    },
    {
      phase: "Testing & Optimization",
      duration: "Week 2",
      icon: CheckCircle2,
      description: "Fine-tuning and optimization to ensure maximum performance",
      activities: [
        "A/B testing of all sequences",
        "Performance monitoring setup",
        "Team training and onboarding",
        "Quality assurance testing",
      ],
    },
    {
      phase: "Launch & Scale",
      duration: "Week 3+",
      icon: Users,
      description:
        "Full deployment with continuous monitoring and optimization",
      activities: [
        "24/7 AI system monitoring",
        "Weekly performance reviews",
        "Continuous optimization",
        "Scaling successful campaigns",
      ],
    },
  ];

  const benefits = [
    "Zero downtime during implementation",
    "No technical expertise required from your team",
    "Seamless integration with existing tools",
    "Dedicated success manager throughout",
    "30-day domination guarantee",
    "24/7 ongoing support and monitoring",
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 md:px-8 bg-muted/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-sora">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              How We Weaponize Your Business
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-space-grotesk font-medium leading-relaxed">
            Our battle-tested implementation process transforms your operations
            into a profit-generating machine in under 30 days.
          </p>
        </motion.div>

        {/* Implementation Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="bg-card/60 backdrop-blur-md border border-primary/20 hover:border-accent/40 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                          <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground font-sora group-hover:text-accent transition-colors duration-300">
                            {phase.phase}
                          </h3>
                          <p className="text-primary font-semibold font-space-grotesk">
                            {phase.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 font-space-grotesk leading-relaxed text-lg">
                        {phase.description}
                      </p>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                            <span className="text-muted-foreground font-space-grotesk">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl font-sora shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Connecting Arrow */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                    <ArrowRight className="w-8 h-8 text-primary/30 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sora">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Our Process Dominates
              </span>
            </h3>
            <p className="text-lg text-muted-foreground font-space-grotesk">
              Unlike other automation companies, we guarantee results with zero
              risk to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-foreground font-space-grotesk font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sora">
            Ready to <span className="text-primary">Dominate</span> Your Market?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-space-grotesk">
            Join hundreds of businesses who've already weaponized their
            operations with ListFlowAI
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 font-space-grotesk"
              onClick={() =>
                window.open(
                  "https://calendly.com/oabouyahia/free-ai-automation-demo-call",
                  "_blank",
                )
              }
            >
              Start Your Domination Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
