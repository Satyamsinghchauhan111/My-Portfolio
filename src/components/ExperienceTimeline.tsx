import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { experiences } from "./experienceData";

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto md:px-6 px-3">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="gradient-text">My Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From operations to engineering — a career pivot that shaped how I
            build exceptional digital experiences
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } pl-12 md:pl-0`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 border-background ${
                      isExpanded
                        ? "bg-primary shadow-lg shadow-primary/50 scale-125"
                        : "bg-secondary"
                    } transition-all duration-300`}
                  >
                    <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></span>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      className={`card-modern p-6 cursor-pointer group ${
                        isExpanded
                          ? "border-primary/40 shadow-xl shadow-primary/10"
                          : ""
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                    >
                      {/* Period badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground/80">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Expand indicator */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech
                            .slice(0, isExpanded ? undefined : 3)
                            .map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-primary/5 border border-primary/10 text-foreground/70"
                              >
                                {tech}
                              </span>
                            ))}
                          {!isExpanded && exp.tech.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-muted-foreground">
                              +{exp.tech.length - 3} more
                            </span>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Expanded details */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          {/* Highlights */}
                          <div className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={
                                  isExpanded
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -10 }
                                }
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Projects */}
                          {exp.projects && (
                            <div className="mt-4">
                              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                <Rocket className="w-3.5 h-3.5" />
                                Key Projects
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.projects.map((project, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground/80"
                                  >
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* All tech */}
                          {isExpanded && exp.tech.length > 3 && (
                            <div className="mt-4">
                              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                Full Stack
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.tech.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-primary/5 border border-primary/10 text-foreground/70"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Present marker at the top */}
          <motion.div
            className="absolute -top-4 left-4 md:left-1/2 md:-translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-lg shadow-primary/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              2018 — Present
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
