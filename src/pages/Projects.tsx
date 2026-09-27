import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  Eye,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  UserCircle2Icon,
  UserRound,
} from "lucide-react";
import { projects } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

type FilterType = "all" | "personal" | "company" | "client";

const FILTERS: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  {
    id: "all",
    label: "All Projects",
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
  {
    id: "personal",
    label: "Personal",
    icon: <Rocket className="w-3.5 h-3.5" />,
  },
  {
    id: "company",
    label: "Company Work",
    icon: <Briefcase className="w-3.5 h-3.5" />,
  },
  {
    id: "client",
    label: "Client Work",
    icon: <UserCircle2Icon className="w-3.5 h-3.5" />,
  },
];

const tiltOptions = {
  reverse: false,
  max: 12,
  perspective: 1000,
  scale: 1.02,
  speed: 800,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  const openPreview = useCallback((project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  }, []);

  const closePreview = useCallback(() => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedProject?.images?.length) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject?.images?.length) return;
    setActiveImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images!.length) %
        selectedProject.images!.length
    );
  }, [selectedProject]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
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

  const getTypeMeta = (project: Project) => {
    switch (project.type) {
      case "client":
        return {
          label: "Client Project",
          icon: <UserCircle2Icon className="w-3 h-3" />,
          badgeClass: "bg-accent/90 text-accent-foreground border-transparent",
          roleClass: "bg-accent/5 border-accent/20 text-accent",
        };
      case "company":
        return {
          label: "Company Project",
          icon: <Briefcase className="w-3 h-3" />,
          badgeClass:
            "bg-secondary/90 text-secondary-foreground border-transparent",
          roleClass: "bg-secondary/5 border-secondary/20 text-secondary",
        };
      default:
        return {
          label: "Personal Project",
          icon: <Rocket className="w-3 h-3" />,
          badgeClass:
            "bg-primary/90 text-primary-foreground border-transparent",
          roleClass: "bg-primary/5 border-primary/20 text-primary",
        };
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-40 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
      </div>

      <div className="container mx-auto md:px-6 px-3 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          <span className="section-badge mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work — from personal experiments to
            production-grade company platforms
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 max-sm:py-0 max-sm:px-0 px-4 md:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  activeFilter === filter.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {activeFilter === filter.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex max-sm:text-[10px] max-sm:px-1 items-center gap-2">
                  {filter.icon}
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const hasImages = project.images && project.images.length > 0;
              const typeMeta = getTypeMeta(project);

              return (
                <motion.div
                  key={project.id}
                  variants={item}
                  layout
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative"
                >
                  <Tilt options={tiltOptions} className="w-full h-full">
                    <div className="card-modern h-full flex flex-col overflow-hidden">
                      {/* Image Preview Area */}
                      <div className="relative h-52 overflow-hidden bg-muted/30">
                        {hasImages ? (
                          <>
                            <img
                              src={project.images![0]}
                              alt={project.title}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Image count badge */}
                            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                              <Layers className="w-3 h-3" />
                              {project.images!.length} shots
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                                <Briefcase className="w-8 h-8 text-primary" />
                              </div>
                              <p className="text-sm text-muted-foreground font-medium">
                                {typeMeta.label}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Type badge */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            variant={
                              project.type === "company"
                                ? "secondary"
                                : "default"
                            }
                            className={cn(
                              "backdrop-blur-sm shadow-lg",
                              typeMeta.badgeClass
                            )}
                          >
                            <span className="flex items-center gap-1">
                              {typeMeta.icon}
                              {typeMeta.label}
                            </span>
                          </Badge>
                        </div>

                        {/* Hover actions */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-[2px]">
                          {hasImages && (
                            <button
                              onClick={() => openPreview(project)}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                              <Eye className="w-4 h-4" />
                              Preview
                            </button>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex gap-1.5 shrink-0">
                            {project.gitHubLink && (
                              <a
                                href={project.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Role Highlight */}
                        <div
                          className={cn(
                            "mb-3 px-3 py-2 rounded-lg border text-xs font-medium leading-relaxed flex items-start gap-2",
                            typeMeta.roleClass
                          )}
                        >
                          <UserRound className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{project.role}</span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techUsed.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-primary/5 border border-primary/10 text-foreground/70"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techUsed.length > 4 && (
                              <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-muted text-muted-foreground">
                                +{project.techUsed.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && closePreview()}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50">
          {selectedProject && (
            <div className="max-h-[85vh] overflow-y-auto">
              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative bg-black/40">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        src={selectedProject.images![activeImageIndex]}
                        alt={`${selectedProject.title} screenshot ${
                          activeImageIndex + 1
                        }`}
                        className="w-full h-full object-cover object-top"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Carousel controls */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </div>

                    {/* Thumbnails */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                              "w-2.5 h-2.5 rounded-full transition-all duration-300",
                              idx === activeImageIndex
                                ? "bg-white scale-125"
                                : "bg-white/40 hover:bg-white/70"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                      <span className="gradient-text">
                        {selectedProject.title}
                      </span>
                    </DialogTitle>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          selectedProject.type === "company"
                            ? "secondary"
                            : "default"
                        }
                        className={cn(
                          selectedProject.type === "company"
                            ? "bg-secondary/15 text-secondary border-secondary/30"
                            : selectedProject.type === "client"
                            ? "bg-accent/15 text-accent border-accent/30"
                            : "bg-primary/15 text-primary border-primary/30"
                        )}
                      >
                        <span className="flex items-center gap-1">
                          {selectedProject.type === "company" ? (
                            <Briefcase className="w-3 h-3" />
                          ) : selectedProject.type === "client" ? (
                            <UserCircle2Icon className="w-3 h-3" />
                          ) : (
                            <Rocket className="w-3 h-3" />
                          )}
                          {selectedProject.type === "company"
                            ? "Company Project"
                            : selectedProject.type === "client"
                            ? "Client Project"
                            : "Personal Project"}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {selectedProject.gitHubLink && (
                      <a
                        href={selectedProject.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <DialogDescription className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {selectedProject.description}
                </DialogDescription>

                {/* Role Highlight - Always shown */}
                <div
                  className={cn(
                    "mb-6 p-4 rounded-xl border flex items-start gap-3",
                    selectedProject.type === "company"
                      ? "bg-secondary/5 border-secondary/20"
                      : selectedProject.type === "client"
                      ? "bg-accent/5 border-accent/20"
                      : "bg-primary/5 border-primary/20"
                  )}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <UserRound className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      My Role
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider",
                          selectedProject.type === "company"
                            ? "bg-secondary/15 text-secondary"
                            : selectedProject.type === "client"
                            ? "bg-accent/15 text-accent"
                            : "bg-primary/15 text-primary"
                        )}
                      >
                        {selectedProject.type}
                      </span>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.role}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/5 border border-primary/10 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
