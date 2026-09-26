import React, { useEffect, useState } from "react";
import HeroAvatar from "./HeroAvatar";
import CommonButton from "@/components/CommonButton";
import { contactItem, container, slideInRight, titles } from "@/utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  const stats = [
    { value: "4.5+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "5+", label: "Happy Clients" },
    { value: "90%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={contactItem} className="mb-6">
              <span className="section-badge">
                <Sparkles className="w-3.5 h-3.5" />
                Available for freelance work
              </span>
            </motion.div>

            <motion.div variants={contactItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text">Satyam Singh</span>
                <span className="text-foreground"> Chauhan</span>
              </h1>
            </motion.div>

            <motion.div variants={contactItem} className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-primary">
                  {titles[index]}
                </span>
                <span className="w-1 h-8 bg-primary/50 animate-pulse rounded-full"></span>
              </div>
            </motion.div>

            <motion.div variants={contactItem} className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                With 4.5+ years of experience crafting exceptional digital
                experiences, I specialize in building scalable, high-performance
                web applications using React, Next.js, and modern TypeScript
                ecosystems. I transform complex requirements into elegant,
                user-centric solutions that drive business growth.
              </p>
            </motion.div>

            <motion.div variants={contactItem} className="mb-10">
              <div className="flex flex-wrap items-center gap-4">
                <CommonButton
                  text="Get In Touch"
                  variant="primary"
                  idName="contact"
                  size="lg"
                />
                <CommonButton
                  text="View Projects"
                  variant="outline"
                  idName="projects"
                  size="lg"
                />
                <CommonButton
                  text="Download Resume"
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/resume")}
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={contactItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="card-modern p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Avatar */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2 flex justify-center w-full overflow-visible px-2 sm:px-0"
          >
            <HeroAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
