import { Card } from "@/components/ui/card";
import { slideInLeft, slideInRight, techStack } from "@/utils";
import profileImage from "@/assets/satyam.jpg";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="pb-10 pt-14 relative">
      <div className="container mx-auto px-6 flex flex-col gap-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="flex justify-center rounded-full"
              variants={slideInLeft}
            >
              <div className="neu neu-hover rounded-full p-4 md:p-2 hover:rotate-1 transition-all duration-500 group">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full max-sm:h-40 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            {/* About Content */}

            <motion.div className="glass glass-hover rounded-2xl">
              <Card className="h-full p-4 md:p-6 border-white/10 hover:border-secondary/30 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-secondary ">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="glass glass-hover px-3 md:px-4 py-1 rounded-xl text-xs md:text-sm font-medium hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer hover:bg-primary/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.1 },
                      }}
                      viewport={{ once: true, amount: 0.03 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div className="glass glass-hover rounded-2xl">
              <Card className="relative p-4 md:p-6 border-white/10 hover:border-primary/30 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary ">
                  Who I Am
                </h3>
                <div className="max-h-72 md:max-h-96 overflow-y-auto">
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-3 md:mb-4 hover:text-foreground transition-colors duration-300">
                    I’m a Frontend Developer with 3+ years of hands-on
                    experience, including a 6-month internship, focused on
                    building modern, scalable, and high-performance web
                    applications. At Codeblock Technologies, I’ve worked
                    extensively with React, Next.js, TypeScript, Tailwind CSS,
                    and Firebase to create clean, responsive, and accessible
                    user interfaces. I specialize in crafting smooth, intuitive,
                    and visually refined experiences backed by solid frontend
                    architecture—whether it’s SSR, component-driven systems,
                    dynamic theming, or performance optimization.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
