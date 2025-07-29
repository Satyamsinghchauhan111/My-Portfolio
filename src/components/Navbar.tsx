import { ReceiptText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { routes } from "@/utils";
import { useNavigate } from "react-router-dom";
import ResumeDownloader from "./ResumeDownloader";

const Navbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname.includes("resume") ? true : false;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 backdrop-blur-lg transition-all duration-300">
      <div className="container mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold  bg-transparent inline-block animate-fade-in-up z-50 gradient-text text-shadow cursor-pointer"
            onClick={() => navigate("/")}
          >
            Portfolio
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
                      className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 relative group"
                    >
                      {r.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
