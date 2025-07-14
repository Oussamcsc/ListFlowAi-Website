import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/listflowai",
      icon: Linkedin,
    },
    {
      name: "Instagram", 
      href: "https://www.instagram.com/list.flowai/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-x-6 md:order-2"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            );
          })}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center text-sm leading-6 text-muted-foreground md:order-1 md:mt-0"
        >
          &copy; {new Date().getFullYear()} ListFlowAI. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
