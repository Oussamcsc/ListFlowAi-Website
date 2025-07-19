import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-sora">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-muted-foreground text-lg font-space-grotesk">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full space-y-8 lg:space-y-12"
          >
            {/* Introduction */}
            <motion.section variants={itemVariants} className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-foreground font-sora">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                At ListFlow AI, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                and use our AI automation services.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section variants={itemVariants} className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-foreground font-sora">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-2 text-base lg:text-lg">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information (company name, industry, size)</li>
                    <li>Communication preferences</li>
                    <li>Information provided during consultations or demo calls</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground">Technical Information</h3>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-4">
                    We automatically collect certain technical information, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-2 text-base lg:text-lg">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>Website usage patterns and analytics</li>
                    <li>Theme preferences (light/dark mode)</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Providing and improving our AI automation services</li>
                <li>Personalizing your experience on our website</li>
                <li>Communicating with you about our services and updates</li>
                <li>Scheduling and conducting consultation calls</li>
                <li>Analyzing website performance and user behavior</li>
                <li>Ensuring website security and preventing fraud</li>
                <li>Remembering your preferences (including theme settings)</li>
              </ul>
            </motion.section>

            {/* Cookies and Tracking */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Cookies and Tracking Technologies</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience:
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <motion.div 
                    className="p-4 lg:p-6 bg-muted/20 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold mb-2 text-foreground">Strictly Necessary</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential for website functionality and cannot be disabled.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 lg:p-6 bg-muted/20 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold mb-2 text-foreground">Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 lg:p-6 bg-muted/20 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold mb-2 text-foreground">Functionality</h4>
                    <p className="text-sm text-muted-foreground">
                      Remember your preferences and provide enhanced features.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 lg:p-6 bg-muted/20 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold mb-2 text-foreground">Targeting</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized content and advertisements.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.section>

            {/* Data Retention */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Analytics data and preferences may be retained 
                for up to 2 years to improve our services.
              </p>
            </motion.section>

            {/* Your Rights */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </motion.section>

            {/* Third-Party Services */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or integrate with third-party services (such as Calendly for scheduling). 
                We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies 
                before providing any personal information.
              </p>
            </motion.section>

            {/* Children's Privacy */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from 
                children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </motion.section>

            {/* Changes to Privacy Policy */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground font-sora">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={itemVariants} className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-foreground font-sora">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <motion.div 
                className="bg-muted/20 p-6 lg:p-8 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-foreground font-semibold mb-3 text-lg">ListFlow AI</p>
                <p className="text-muted-foreground mb-2">
                  Email: <a href="mailto:privacy@listflowai.com" className="text-primary hover:text-primary/80 underline transition-colors">privacy@listflowai.com</a>
                </p>
                <p className="text-muted-foreground">Business Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
              </motion.div>
            </motion.section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
