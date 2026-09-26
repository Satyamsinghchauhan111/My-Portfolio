import ThemeToggle from "./ThemeToggle";
import { routes } from "@/utils";
import { useNavigate } from "react-router-dom";
import ResumeDownloader from "./ResumeDownloader";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname.includes("resume") ? true : false;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div
            className="text-xl font-bold bg-transparent inline-block cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="gradient-text">Satyam</span>
            <span className="text-foreground">.dev</span>
          </div>
          <div className="flex items-center space-x-8">
            {path ? (
              <ResumeDownloader />
            ) : (
              <>
                {routes.map((r, i) => (
                  <div className="hidden md:flex space-x-8" key={i}>
                    <a
                      href={r.path}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                    >
                      {r.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                ))}
              </>
            )}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
