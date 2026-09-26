import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Hero from "@/pages/Hero";
import Navbar from "./Navbar";
import Fab from "./Fab";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh]">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />

      <Fab />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025{" "}
              <span className="font-semibold text-foreground">
                Satyam Singh Chauhan
              </span>
              . All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/satyamtheone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/satyam-singh-087157184/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:satyamsingh7417@gmail.com"
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-sm text-muted-foreground flex items-center gap-1">
              Crafted with{" "}
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using
              React, TypeScript & Tailwind
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/30 flex justify-center gap-6 opacity-60">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/practice")}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Practice
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
