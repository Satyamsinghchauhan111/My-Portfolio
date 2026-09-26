import { Card } from "@/components/ui/card";
import { contactItem, projects } from "@/utils";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Layers } from "lucide-react";

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

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto md:px-6 px-3">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <span className="section-badge mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.03 }}
        >
          {projects.slice(5, 8).map((project, index) => (
            <motion.div
              key={project.id}
              variants={contactItem}
              className="card-modern"
            >
              <Card className="p-0 h-full flex flex-col overflow-hidden rounded-2xl border-0 bg-transparent">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.gitHubLink && (
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {project.role && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-secondary mb-2">
                        Role:
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.role}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-secondary mb-2">
                      Tech Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/5 border border-primary/10 text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
