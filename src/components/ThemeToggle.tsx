import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`group relative flex items-center justify-center w-10 h-10 rounded-full border ${
        theme === "light" ? "border-black/10" : "border-white/10"
      }  bg-black/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === "light"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <div className="relative w-6 h-6">
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-2 bg-accent rounded-full bg-yellow-200"
                style={{
                  top: "0px",
                  left: "50%",
                  transformOrigin: "center 12px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
              />
            ))}
            {/* Sun center */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300" />
          </div>
        </div>

        {/* Moon Icon */}
        <div
          className={`absolute inset-0 flex  items-center justify-center transition-all duration-500 ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <div className="w-5 h-5 bg-accent rounded-full relative overflow-hidden border-[1px] border-black">
            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full" />
          </div>
        </div>
      </div>
    </Button>
  );
};

export default ThemeToggle;
