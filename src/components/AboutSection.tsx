import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Businesses Automated", icon: Users },
    { number: "95%", label: "Client Satisfaction", icon: Award },
    { number: "10x", label: "Efficiency Increase", icon: Zap },
    { number: "24/7", label: "AI Support", icon: Target },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="text-primary">ListFlowAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how service businesses operate through
            intelligent AI automation. Our mission is to eliminate repetitive
            tasks and unlock human potential.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 glow-text font-sora">
              Our <span className="text-primary">Story</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed font-space-grotesk text-justify">
              Founded in 2023 by two brother software engineers in Washington
              DC, ListFlowAI emerged from a simple observation: service
              businesses were drowning in manual processes while AI technology
              remained out of reach for most. Having worked at leading tech
              companies, the founding brothers decided to bridge this gap by
              creating accessible AI solutions that actually work for real
              businesses. Today, we're proud to serve hundreds of businesses
              worldwide, helping them save time, increase efficiency, and focus
              on what matters most - serving their customers.
            </p>
          </div>
          <div className="relative">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl border border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/pexels-goumbik-574071.jpg"
                alt="Developer coding and AI innovation"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
