import ThemeToggle from "./ThemeToggle";
import { routes } from "@/utils";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Hero from "@/pages/Hero";
import Navbar from "./Navbar";

const Portfolio = () => {
  return (
    <div className="min-h-[80vh]">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60">
            © 2025 Satyam Developer. Crafted with ❤️ using React & Tailwind CSS
            & Daisy ui
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
