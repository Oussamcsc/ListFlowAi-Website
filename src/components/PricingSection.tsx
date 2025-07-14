import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingSection = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Assassin",
      price: "$997",
      description:
        "For businesses ready to eliminate inefficiency and start dominating.",
      features: [
        "Ruthless workflow automation",
        "AI-powered lead capture",
        "Competitor intelligence alerts",
        "Up to 5 automation workflows",
        "10 hours of elite support",
      ],
      buttonText: "Purchase Now",
    },
    {
      name: "Emperor",
      price: "Custom",
      description: "For industry titans who demand absolute market domination.",
      features: [
        "Unlimited AI automation arsenal",
        "Custom market intelligence",
        "Full ecosystem integration",
        "Bespoke AI solutions",
        "24/7 elite tactical support",
        "Monthly strategy war councils",
        "White-labeled empire tools",
      ],
      buttonText: "Book a Demo Call",
    },
  ];

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
      },
    },
  };

  return (
    <section
      id="pricing"
      className="py-20 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid cyber-grid-light"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-sora">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Choose Your Weapon
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-space-grotesk font-medium leading-relaxed">
            No contracts. No bullshit. Just pure automation power that scales
            with your ambition.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className={`h-full flex flex-col bg-card border transition-all duration-300 ${
                  tier.popular
                    ? "border-primary shadow-lg shadow-primary/20 scale-105"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-neon-purple to-neon-cyan text-primary-foreground text-center py-2 text-sm font-bold font-space-grotesk">
                    MOST RUTHLESS
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-black text-foreground font-sora mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-black bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    {tier.name !== "Emperor" && (
                      <span className="text-muted-foreground font-space-grotesk">
                        /month
                      </span>
                    )}
                  </div>
                  <CardDescription className="mt-4 text-muted-foreground font-space-grotesk leading-relaxed">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-6">
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-neon-cyan shrink-0 mr-3 mt-0.5" />
                        <span className="text-muted-foreground font-space-grotesk">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-full py-4 font-bold font-space-grotesk transition-all duration-300 ${
                        tier.name === "Emperor"
                          ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground border-destructive"
                          : "bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-primary-foreground shadow-neon-purple hover:shadow-neon-cyan"
                      }`}
                      onClick={() => {
                        if (tier.buttonText === "Purchase Now") {
                          window.open(
                            "https://buy.stripe.com/8x2dR8diQfy3ay66ow28800",
                            "_blank",
                          );
                        } else if (tier.buttonText === "Book a Demo Call") {
                          window.open(
                            "https://calendly.com/oabouyahia/free-ai-automation-demo-call",
                            "_blank",
                          );
                        }
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-6 text-lg font-space-grotesk">
            30-day domination guarantee. No contracts. No excuses. Just results.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="link"
              className="text-neon-cyan hover:text-neon-purple font-bold font-space-grotesk text-lg"
            >
              View full arsenal details
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
