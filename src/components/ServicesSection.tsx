import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simple, contextual animated icon components
const RuthlessOperationsIcon = () => {
  return (
    <motion.div
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <Settings className="w-8 h-8" />
    </motion.div>
  );
};

const LeadDominationIcon = () => {
  return (
    <motion.div
      animate={{ 
        y: [0, -4, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <TrendingUp className="w-8 h-8" />
    </motion.div>
  );
};

const EmpireAutomationIcon = () => {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <Zap className="w-8 h-8" />
    </motion.div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceCard = ({
  icon,
  title,
  description,
  benefits = [],
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
      whileHover={{ y: -5 }}
    >
      <Card className="h-full bg-card/60 backdrop-blur-md border border-primary/30 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group">
        <CardContent className="p-8 flex flex-col h-full">
          <motion.div
            className="mb-6 text-primary p-4 bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center border border-primary/30 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-foreground font-sora group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground mb-8 font-space-grotesk leading-relaxed">
            {description}
          </p>
          <div className="mt-auto">
            <h4 className="font-bold mb-4 text-primary font-space-grotesk">
              Domination Metrics:
            </h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground font-space-grotesk">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <RuthlessOperationsIcon />,
      title: "Ruthless Operations",
      description:
        "Eliminate every inefficiency. Our AI doesn't just automate—it optimizes, learns, and evolves to crush operational waste.",
      benefits: [
        "Slash operational costs by 60%+",
        "Zero human error tolerance",
        "Team focuses on revenue generation only",
      ],
    },
    {
      icon: <LeadDominationIcon />,
      title: "Lead Domination Engine",
      description:
        "Turn every visitor into a qualified prospect. Our AI doesn't just capture leads—it qualifies, nurtures, and delivers them ready to close.",
      benefits: [
        "Conversion rates increase 50%+ guaranteed",
        "AI-powered psychological profiling",
        "Instant lead scoring and prioritization",
      ],
    },
    {
      icon: <EmpireAutomationIcon />,
      title: "Empire Automation",
      description:
        "Build systems that scale infinitely. Connect every tool, automate every process, and create workflows that work while you sleep.",
      benefits: [
        "Unlimited scalability without headcount",
        "24/7 automated client lifecycle management",
        "Custom AI triggers for maximum efficiency",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-4 md:px-8 bg-background relative overflow-hidden"
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
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Weapons-Grade AI Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-space-grotesk font-medium leading-relaxed">
            Ruthless automation that eliminates inefficiency and scales your
            empire while you focus on what matters: closing deals and dominating
            your market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-full transition-all duration-300 font-space-grotesk w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://calendly.com/oabouyahia/free-ai-automation-demo-call",
                  "_blank",
                )
              }
            >
              <span className="block sm:inline">Dominate Your Market Now</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
          <p className="mt-6 text-lg text-muted-foreground font-space-grotesk font-medium">
            See how we'll eliminate your competition
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
