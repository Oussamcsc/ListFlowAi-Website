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

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      bio: "Former Google AI engineer with 10+ years in automation",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Machine learning expert and automation architect",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
      bio: "Product strategist focused on user experience",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2023, ListFlowAI emerged from a simple observation:
              service businesses were drowning in manual processes while AI
              technology remained out of reach for most.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our founders, having worked at leading tech companies, decided to
              bridge this gap by creating accessible AI solutions that actually
              work for real businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to serve hundreds of businesses worldwide,
              helping them save time, increase efficiency, and focus on what
              matters most - serving their customers.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Innovation meets practicality
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/20"
                />
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
