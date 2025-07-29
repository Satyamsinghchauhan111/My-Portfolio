import React, { useEffect, useState } from "react";
import HeroAvatar from "./HeroAvatar";
import CommonButton from "@/components/CommonButton";
import { contactItem, container, slideInRight, titles } from "@/utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setVisible(true);
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto relative z-10 grid md:grid-cols-2 grid-cols-1 px-4 md:px-5 gap-8 md:gap-0"
      >
        <HeroAvatar />

        <div className="animate-fade-in-up col-span-1 flex justify-center items-center mt-8 md:mt-0 max-sm:-mt-28  max-sm:mb-4">
          <motion.div variants={slideInRight}>
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-2 leading-tight text-center md:text-left">
                {"Satyam Singh Chauhan".split("").map((char, i) => (
                  <div key={i} className="inline">
                    {char.toLowerCase() === "c" && <br />}
                    <span
                      className="inline-block animate-fade-in-up z-50 gradient-text text-shadow opacity-0 sm:pb-2"
                      style={{
                        animationDelay: `${i * 0.12}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </div>
                ))}
              </h1>
              <div className=" md:text-2xl text-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 flex flex-col md:text-left ">
                <span
                  key={titles[index]}
                  className={`inline-block max-sm:text-center pr-2 py-2 text-xl font-semibold dark:text-accent text-teal-700 transition-all duration-700
                ${visible && "animate-slide-in-right"}`}
                >
                  {titles[index]}
                </span>
                <motion.div
                  variants={contactItem}
                  className="text-justify  dark:text-white text-black"
                >
                  <span className="animate-fade-in-up  text-[16px]  md:text-left">
                    Frontend-focused full stack developer with 6+ years of
                    professional experience delivering responsive, user-centric
                    web and mobile applications. Skilled in React, Next.js,
                    TypeScript, Tailwind CSS, and Firebase. Built scalable
                    systems with SSR, dynamic theming, and real-time features.
                    Proven track record across enterprise (Genpact) and
                    tech-driven (Codeblock) environments.
                  </span>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 sm:justify-start justify-center animate-slide-in-left">
                <CommonButton
                  text={"Get In Touch"}
                  variant={"primary"}
                  idName={"contact"}
                  size={"lg"}
                />
                <CommonButton
                  text={"View Projects"}
                  variant={"outline"}
                  idName={"projects"}
                  size={"lg"}
                />
                <CommonButton
                  text={"Get Resume"}
                  variant={"primary"}
                  size={"lg"}
                  onClick={() => navigate("/resume")}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
