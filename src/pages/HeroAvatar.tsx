import coolGuy from "/src/assets/hero-withoutbghd.png";
import react from "/src/assets/logos/react-01.png";
import mui from "/src/assets/logos/mui.png";
import tailwind from "/src/assets/logos/tailwind.png";
import js from "/src/assets/logos/js-square.svg";
import redux from "/src/assets/logos/redux.png";
import typescript from "/src/assets/logos/typescript.png";
import firebase from "/src/assets/logos/firebase.webp";
import next from "/src/assets/logos/next.png";
import daisyui from "/src/assets/logos/daisyui-square.svg";
import cypress from "/src/assets/logos/cypress-white.svg";
import css from "/src/assets/logos/css-3.png";
import html from "/src/assets/logos/html.png";
import { motion } from "framer-motion";
import { slideInLeft } from "@/utils";

const HeroAvatar = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-full"
      variants={slideInLeft}
    >
      {/* Glowing ring behind avatar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse"></div>
      </div>

      {/* Circular ring + orbit logos (all positioned exactly on the circle) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96">
          {/* Decorative spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"></div>

          {/* Orbit logos - 30° intervals around the circle */}
          {/* Top (0°) - Next.js */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "0s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={next}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-sm"
                  alt="Next.js"
                />
              </div>
            </div>
          </div>

          {/* 30° - React */}
          <div className="absolute left-[75%] top-[6.7%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={react}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  alt="React"
                />
              </div>
            </div>
          </div>

          {/* 60° - DaisyUI */}
          {/* <div className="absolute left-[93.3%] top-[25%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={daisyui}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  alt="DaisyUI"
                />
              </div>
            </div>
          </div> */}

          {/* Right (90°) - JavaScript */}
          <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={js}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  alt="JavaScript"
                />
              </div>
            </div>
          </div>

          {/* 150° - CSS */}
          <div className="absolute left-[75%] top-[93.3%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "2.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={css}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                  alt="CSS"
                />
              </div>
            </div>
          </div>

          {/* Bottom (180°) - Tailwind */}
          <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "3s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={tailwind}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                  alt="Tailwind"
                />
              </div>
            </div>
          </div>

          {/* 210° - HTML */}
          <div className="absolute left-[25%] top-[93.3%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "3.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={html}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                  alt="HTML"
                />
              </div>
            </div>
          </div>

          {/* 240° - TypeScript */}
          <div className="absolute left-[6.7%] top-[75%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "4s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={typescript}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  alt="TypeScript"
                />
              </div>
            </div>
          </div>

          {/* Left (270°) - Redux */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "4.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={redux}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  alt="Redux"
                />
              </div>
            </div>
          </div>

          {/* 300° - MUI */}
          <div className="absolute left-[6.7%] top-[25%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={mui}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                  alt="MUI"
                />
              </div>
            </div>
          </div>

          {/* 330° - Firebase */}
          <div className="absolute left-[25%] top-[6.7%] -translate-x-1/2 -translate-y-1/2">
            <div className="animate-float" style={{ animationDelay: "5.5s" }}>
              <div className="glass glass-hover rounded-xl p-1.5 sm:p-2 shadow-lg shadow-primary/10">
                <img
                  src={firebase}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                  alt="Firebase"
                />
              </div>
            </div>
          </div>
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

      {/* Floating badges */}
      <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20">
        <div className="animate-float">
          <div className="glass glass-hover rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-primary/10">
            <div className="text-[10px] sm:text-xs font-semibold text-primary">
              5+ Years
            </div>
            <div className="text-[8px] sm:text-[10px] text-muted-foreground">
              Experience
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-4 bottom-1/4 z-20">
        <div className="animate-float" style={{ animationDelay: "2s" }}>
          <div className="glass glass-hover rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-primary/10">
            <div className="text-[10px] sm:text-xs font-semibold text-secondary">
              20+
            </div>
            <div className="text-[8px] sm:text-[10px] text-muted-foreground">
              Projects
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAvatar;
