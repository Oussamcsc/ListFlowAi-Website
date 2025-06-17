import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Steel",
    company: "Apex Consulting",
    role: "CEO & Founder",
    quote:
      "ListFlowAI didn't just automate our processes—it weaponized them. We went from 12-hour days to 4-hour power sessions while 3x-ing our revenue. This isn't automation, it's domination.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
  },
  {
    id: 2,
    name: "Victoria Cross",
    company: "Empire Digital",
    role: "Chief Revenue Officer",
    quote:
      "Our conversion rates exploded by 73% in the first month. ListFlowAI doesn't just capture leads—it psychologically profiles them and delivers them ready to sign. Ruthlessly effective.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=victoria",
  },
  {
    id: 3,
    name: "Alexander Kane",
    company: "Titan Ventures",
    role: "Managing Director",
    quote:
      "I was skeptical until I saw the numbers. 60% cost reduction, 200% productivity increase, and my competitors are still playing catch-up. ListFlowAI gave us an unfair advantage.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alexander",
  },
  {
    id: 4,
    name: "Sophia Blackwood",
    company: "Blackwood Enterprises",
    role: "Founder",
    quote:
      "While my competitors burn out managing operations, I'm closing deals and scaling empires. ListFlowAI works 24/7 so I can focus on what matters: total market domination.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section
      className="py-20 px-4 md:px-8 bg-black w-full relative overflow-hidden"
      id="testimonials"
    >
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-sora">
            <span className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              War Stories From The Trenches
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-space-grotesk font-medium leading-relaxed">
            Real results from real warriors who chose to dominate their markets
            with ListFlowAI.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <div className="relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <Card className="border border-neon-purple/30 shadow-neon-purple bg-black/60 backdrop-blur-md">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                          <Avatar className="h-24 w-24 md:h-28 md:w-28 border-2 border-neon-cyan/50 shadow-neon-cyan">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-neon-purple/20 text-neon-purple font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 text-center md:text-left">
                            <div className="mb-6">
                              <svg
                                className="h-8 w-8 text-neon-cyan inline-block mb-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <p className="text-xl md:text-2xl text-white italic mb-8 font-space-grotesk leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                            <div>
                              <h4 className="font-bold text-neon-purple text-xl font-sora">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-400 font-space-grotesk font-medium">
                                {testimonial.role}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-8 bg-neon-purple shadow-neon-purple" : "w-2.5 bg-gray-600 hover:bg-neon-cyan"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-8 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/80 backdrop-blur-sm border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-white pointer-events-auto transition-all duration-300"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/80 backdrop-blur-sm border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-white pointer-events-auto transition-all duration-300"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-white font-sora">
            Ready to join the elite?
          </h3>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-white font-bold px-12 py-6 text-lg rounded-full shadow-neon-purple hover:shadow-neon-cyan transition-all duration-300 animate-glow-pulse font-space-grotesk"
            >
              Book a Demo Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
