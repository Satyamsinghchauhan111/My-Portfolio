import { Card } from "@/components/ui/card";
import { contactItem, projects } from "@/utils";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CommonButton from "@/components/CommonButton";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0.3 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <section id="projects" className="pb-10 pt-14 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          className=" flex flex-col gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.03 }}
        >
          {projects.slice(5, 8).map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className="glass glass-hover rounded-xl"
            >
              <Card
                key={index}
                className=" p-0  h-full flex flex-col overflow-hidden rounded-xl"
              >
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {project.title}
                      </h3>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-foreground/70 mb-4 leading-relaxed ">
                        {project.description}
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div>
                        <h4 className="text-sm font-medium text-secondary mb-2">
                          Role:
                        </h4>
                        <p className="text-foreground/70 mb-4 leading-relaxed ">
                          {project.role}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-secondary mb-2">
                          Tech Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techUsed.map((tech) => (
                            <span
                              key={tech}
                              className="neu px-3 py-1 rounded-lg text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.gitHubLink && (
                      <motion.div
                        className="flex items-center space-x-4 tooltip"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: 0.2 }}
                        data-tip="ask permission"
                      >
                        <CommonButton
                          text="GitHub"
                          variant="primary"
                          size="sm"
                          onClick={() => {}}
                        />
                      </motion.div>
                    )}
                    {project.liveLink && (
                      <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: 0.2 }}
                      >
                        <CommonButton
                          text="Live Demo"
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`${project.liveLink}`)}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
