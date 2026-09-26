import coolGuy from "/src/assets/hero-withoutbghd.png";
import react from "/src/assets/logos/react-01.png";
import mui from "/src/assets/logos/mui.png";
import tailwind from "/src/assets/logos/tailwind.png";
import js from "/src/assets/logos/js.png";
import redux from "/src/assets/logos/redux.png";
import typescript from "/src/assets/logos/typescript.png";
import firebase from "/src/assets/logos/firebase.webp";
import next from "/src/assets/logos/next.png";
import { motion } from "framer-motion";
import { slideInLeft } from "@/utils";

const HeroAvatar = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-full max-w-[280px] xs:max-w-sm sm:max-w-md"
      variants={slideInLeft}
    >
      {/* Glowing ring behind avatar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse"></div>
      </div>

      {/* Decorative ring */}
      <div className="absolute w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"></div>

      {/* Tech Logos - Left Side */}
      <div
        className="absolute left-[2%] top-[12%] animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={react}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            alt="React"
          />
        </div>
      </div>
      <div
        className="absolute left-[-2%] top-[38%] animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={typescript}
            className="w-6 h-6 sm:w-8 sm:h-8"
            alt="TypeScript"
          />
        </div>
      </div>
      <div
        className="absolute left-[4%] top-[62%] animate-float"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={tailwind}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
            alt="Tailwind"
          />
        </div>
      </div>
      <div
        className="absolute left-[16%] top-[3%] animate-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img src={next} className="w-6 h-6 sm:w-8 sm:h-8" alt="Next.js" />
        </div>
      </div>

      {/* Main Image */}
      <div className="relative z-10">
        <img
          src={coolGuy}
          className="h-48 xs:h-56 sm:h-72 lg:h-96 w-auto object-contain animate-float"
          alt="Satyam Singh Chauhan"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Tech Logos - Right Side */}
      <div
        className="absolute right-[2%] top-[18%] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img src={js} className="w-6 h-6 sm:w-8 sm:h-8" alt="JavaScript" />
        </div>
      </div>
      <div
        className="absolute right-[-2%] top-[42%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={redux}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            alt="Redux"
          />
        </div>
      </div>
      <div
        className="absolute right-[6%] top-[66%] animate-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={firebase}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
            alt="Firebase"
          />
        </div>
      </div>
      <div
        className="absolute right-[20%] top-[5%] animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="glass rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
          <img
            src={mui}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
            alt="MUI"
          />
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-primary/10 animate-float">
        <div className="text-[10px] sm:text-xs font-semibold text-primary">
          5+ Years
        </div>
        <div className="text-[8px] sm:text-[10px] text-muted-foreground">
          Experience
        </div>
      </div>

      <div
        className="absolute -right-2 sm:-right-4 bottom-1/4 glass rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-primary/10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="text-[10px] sm:text-xs font-semibold text-secondary">
          20+
        </div>
        <div className="text-[8px] sm:text-[10px] text-muted-foreground">
          Projects
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAvatar;
