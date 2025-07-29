import coolGuy from "/src/assets/hero-withoutbghd.png";
import cross from "/src/assets/logos/cross-platform.png";
import css from "/src/assets/logos/css-3.png";
import html from "/src/assets/logos/html.png";
import react from "/src/assets/logos/react-01.png";
import mui from "/src/assets/logos/mui.png";
import tailwind from "/src/assets/logos/tailwind.png";
import vscode from "/src/assets/logos/vscode.jpeg";
import js from "/src/assets/logos/js.png";
import redux from "/src/assets/logos/redux.png";
import typescript from "/src/assets/logos/typescript.png";
import daisyui from "/src/assets/logos/daisyui.png";
import android from "/src/assets/logos/android-studio-icon.webp";
import firebase from "/src/assets/logos/firebase.webp";
import expo from "/src/assets/logos/expo.png";
import next from "/src/assets/logos/next.png";
import { motion } from "framer-motion";
import { slideInLeft } from "@/utils";

const HeroAvatar = () => {
  return (
    <motion.div
      className="col-span-1 animate-fade-in-up relative flex justify-center items-center "
      variants={slideInLeft}
    >
      {/* Tech Logos - Left Side (Before) */}
      <div
        className="absolute left-[40px] top-1/4 animate-float max-sm:left-0 max-sm:top-[15%]"
        style={{ animationDelay: "2s" }}
      >
        <img src={cross} className="w-8 h-8" alt="HTML" />
      </div>
      <div className="absolute left-[5%] top-[43%]  animate-float">
        <img src={css} className="w-8 h-8" alt="CSS" />
      </div>
      <div
        className="absolute left-[20%] top-[45%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={html} className="w-8 h-8 " alt="React" />
      </div>

      <div className="absolute left-[5%] top-[55%]  animate-float">
        <img src={react} className="w-8 h-8 rounded-full" alt="CSS" />
      </div>
      <div
        className="absolute left-[0%] top-[32%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={mui} className="w-8 h-8 rounded-2xl" alt="CSS" />
      </div>

      <div className="absolute left-[20%] top-[65%]  animate-float">
        <img
          src={tailwind}
          className="w-8 h-8 rounded-2xl animate-glow"
          alt="CSS"
        />
      </div>
      <div
        className="absolute left-[25%] top-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src={vscode}
          className="w-8 h-8 rounded-2xl animate-glow"
          alt="CSS"
        />
      </div>

      {/* Main Image */}
      <img
        src={coolGuy}
        className="h-4/6 z-10 animate-float"
        alt="CoolGuy"
        style={{ animationDelay: "3s" }}
      />

      {/* Tech Logos - Right Side (After) */}
      <div
        className="absolute right-[20%] top-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={js} className="w-8 h-8 animate-glow" alt="Next.js" />
      </div>

      <div className="absolute right-[0%] sm:right-[15%] top-[40%]  animate-float">
        <img src={typescript} className="w-8 h-8" alt="Capacitor" />
      </div>
      <div
        className="absolute max-sm:right-[5%] right-[28%] top-[25%] sm:top-[20%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={redux} className="w-12 h-10 rounded-full " alt="Capacitor" />
      </div>
      <div
        className="absolute right-[5%] top-[50%] sm:right-[20%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={daisyui} className="w-16 h-8 rounded-2xl" alt="Capacitor" />
      </div>
      <div className="absolute right-[28%] top-[65%]  animate-float">
        <img src={expo} className="w-8 h-8 rounded-full" alt="Capacitor" />
      </div>
      <div
        className="absolute right-[10%] top-[65%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={android} className="w-8 h-8" alt="Capacitor" />
      </div>
      <div
        className="absolute right-[30%] top-[25%] sm:right-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={firebase} className="w-8 h-8 rounded-2xl" alt="CSS" />
      </div>

      <div
        className="absolute right-[40%] top-[12%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img src={next} className="w-8 h-6` " alt="CSS" />
      </div>
    </motion.div>
  );
};

export default HeroAvatar;
