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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="pb-10 pt-14 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item}>
              <Card className="glass glass-hover p-0 border-white/10 h-full flex flex-col overflow-hidden">
                {/* Image Carousel */}
                <div className="relative h-48 overflow-hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 3000 + index * 500,
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="w-full h-full"
                  >
                    <CarouselContent className="h-full">
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <div className="relative h-full">
                            <img
                              src={image}
                              alt={`${project.title} preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center space-x-4"
                      variants={contactItem}
                    >
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {project.title}
                      </h3>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      variants={contactItem}
                    >
                      <p className="text-foreground/70 mb-4 leading-relaxed max-h-24 overflow-scroll">
                        {project.description}
                      </p>
                    </motion.div>
                    <motion.div variants={contactItem}>
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
                    <motion.div
                      className="flex items-center space-x-4 tooltip"
                      variants={contactItem}
                      data-tip="ask permission"
                    >
                      <CommonButton
                        text="GitHub"
                        variant="primary"
                        size="sm"
                        onClick={() => {}}
                      />
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      variants={contactItem}
                    >
                      <CommonButton
                        text="Live Demo"
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`${project.liveLink}`)}
                      />
                    </motion.div>
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
