import { slideInLeft, slideInRight, techStack } from "@/utils";
import profileImage from "@/assets/satyam.jpg";
import { motion } from "framer-motion";
import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";
import ExperienceTimeline from "@/components/ExperienceTimeline";

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

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "5+ Years Experience",
      description: "Professional frontend development",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "20+ Projects",
      description: "Delivered across various industries",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "10+ Clients",
      description: "Satisfied clients worldwide",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Modern Stack",
      description: "React, Next.js, TypeScript & more",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto md:px-6 px-3">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4">
            <Code2 className="w-3.5 h-3.5" />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with 5+ years of experience crafting
            exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Profile & Highlights */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <div className="card-modern p-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20">
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Satyam Singh Chauhan
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      Senior Frontend Developer
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Based in India
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    className="card-modern p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Tech Stack & Bio */}
            <motion.div variants={slideInRight} className="space-y-6">
              <div className="card-modern p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/5 border border-primary/10 text-foreground/80 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.05 },
                      }}
                      viewport={{ once: true, amount: 0.03 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="card-modern p-6">
                <h3 className="text-lg font-semibold mb-4 text-secondary">
                  My Journey
                </h3>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm a Frontend Developer with 5+ years of hands-on
                    experience, including a 6-month internship, focused on
                    building modern, scalable, and high-performance web
                    applications. At Codeblock Technologies, I've worked
                    extensively with React, Next.js, TypeScript, Tailwind CSS,
                    and Firebase to create clean, responsive, and accessible
                    user interfaces.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I specialize in crafting smooth, intuitive, and visually
                    refined experiences backed by solid frontend
                    architecture—whether it's SSR, component-driven systems,
                    dynamic theming, or performance optimization. My expertise
                    spans across web and cross-platform development, delivering
                    production-ready solutions that scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Experience Timeline Section */}
      <ExperienceTimeline />
    </section>
  );
};

export default About;
