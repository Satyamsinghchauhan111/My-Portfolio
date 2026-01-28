import ThemeToggle from "./ThemeToggle";
import { routes } from "@/utils";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Hero from "@/pages/Hero";
import Navbar from "./Navbar";
import Fab from "./Fab";
import { useNavigate } from "react-router-dom";

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
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60">
            © 2025 Satyam Developer. Crafted with ❤️ using React, Typescript,
            Tailwind CSS & Daisy ui
          </p>
          <div className="flex gap-5 justify-between opacity-40">
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/practice")}>practice</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
