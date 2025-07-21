import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);

    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@listflowai.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "989-285-5145",
      description: "Mon-Fri from 8am to 6pm PST",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation? Let's discuss
            how ListFlowAI can help you streamline operations and boost
            efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-card/50 border border-border rounded-xl p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 flex items-center"
                    >
                      Full Name
                      <span className="text-red-500 ml-1 text-base">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-field bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 flex items-center"
                    >
                      Email Address
                      <span className="text-red-500 ml-1 text-base">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-field bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="username@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 flex items-center"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Business name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 flex items-center"
                  >
                    Message
                    <span className="text-red-500 ml-1 text-base">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-field bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Tell us about your business challenges and automation goals. What specific processes are eating your profits? What's your current monthly revenue? What results would make this a no-brainer investment for you?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 h-full flex flex-col"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start p-6 rounded-xl bg-card/50 border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                    {info.title === "Email Us" ? (
                      <a
                        href={`mailto:${info.details}`}
                        className="text-primary font-medium mb-1 hover:text-primary/80 transition-colors duration-200 cursor-pointer"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-8 text-center mt-auto">
              <h4 className="text-xl font-bold mb-4">
                Skip the Form - Get Instant Results
              </h4>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute AI ROI assessment. We'll analyze your
                business and show you exactly how much money you're leaving on
                the table.
              </p>
              <div className="space-y-3">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:glow"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/oabouyahia/free-ai-automation-demo-call",
                      "_blank",
                    )
                  }
                >
                  Book Free AI ROI Assessment
                </Button>
                <p className="text-xs text-muted-foreground font-space-grotesk">
                  ✓ No sales pitch ✓ Actionable insights ✓ Custom automation
                  roadmap
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
