import Portfolio1 from "./assets/projects/portfolio1.png";
import Portfolio2 from "./assets/projects/portfolio2.png";
import Portfolio3 from "./assets/projects/portfolio3.png";
import help1 from "./assets/projects/help1.png";
import help2 from "./assets/projects/help2.png";
import help3 from "./assets/projects/help3.png";
import help4 from "./assets/projects/help4.png";
import help5 from "./assets/projects/help5.png";
import help6 from "./assets/projects/help6.png";
import client1 from "./assets/projects/client1.png";
import client2 from "./assets/projects/client2.png";
import client3 from "./assets/projects/client3.png";
import client4 from "./assets/projects/client4.png";
import client5 from "./assets/projects/client5.png";
import template1 from "./assets/projects/template1.png";
import template2 from "./assets/projects/template2.png";
import template3 from "./assets/projects/template3.png";
import future1 from "./assets/projects/future1.png";

import future2 from "./assets/projects/future2.png";

import future3 from "./assets/projects/future3.png";

export const projects = [
  {
    id: "1",
    title: "Old Portfolio",
    description:
      "This portfolio was made by me just to see what i have learn design part in my early days",
    techUsed: ["React", "Html", "CSS"],
    gitHubLink: "",
    liveLink: "https://merry-marshmallow-e96507.netlify.app/",
    images: [Portfolio1, Portfolio2, Portfolio3],
  },
  {
    id: "2",
    title: "Local Help",
    description:
      "This is my personal project : LocalHelp is a real-time, location-based platform connecting users who need urgent help with nearby helpers in their community. Whether it's a medical emergency, a flat tire, or a quick local query, users can broadcast requests that others in the area instantly see. The app uses GPS to match people within specific sectors or villages, enabling fast and relevant support. It's like Uber, but for local assistance — powered by community. ",
    techUsed: [
      "React",
      "Html",
      "CSS",
      "tailwind",
      "vite",
      "javascript",
      "typescript",
      "postgres",
    ],
    gitHubLink: "",
    liveLink: "https://localhelpsite.netlify.app/",
    images: [help1, help2, help3, help4, help5, help6],
  },
  {
    id: "3",
    title: "Clients marketing site",
    description:
      "Client was in urgency to make a marketing site for his project so i build this static website just under 2 days with pixel perfect responsive design",
    techUsed: [
      "React",
      "Html",
      "CSS",
      "tailwind",
      "cookies",
      "vite",
      "javascript",
      "typescript",
      "Daisy ui",
    ],
    gitHubLink: "",
    liveLink: "https://dashing-sprite-d874b7.netlify.app/",
    images: [client1, client2, client3, client4, client5],
  },
  {
    id: "4",
    title: "Easy template maker",
    description:
      "i want to check if i can make any thing using drag and drop libraries so i make this simple one please open this on desktop it is not responsive ",
    techUsed: [
      "React",
      "Html",
      "CSS",
      "javascript",
      "framer-motion",
      "react-beautiful-dnd",
      "smooth-dnd",
    ],
    gitHubLink: "",
    liveLink: "https://easytemplatebuilder.netlify.app/",
    images: [template1, template2, template3],
  },
  {
    id: "5",
    title: "A try with scroll animations",
    description:
      "This  sample page using javascript code and animation library i was trying to make a scroll animation just like 3JS but without it  ",
    techUsed: [
      "React",
      "Html",
      "CSS",
      "radix-ui",
      "animejs",
      "framer-motion",
      "embla-carousel-react",
    ],
    gitHubLink: "",
    liveLink: "https://stellular-cassata-d6d7ea.netlify.app/",
    images: [future1, future2, future3],
  },
];

export const routes = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];
export const techStack = [
  "React",
  "javascript",
  "TypeScript",
  "Next js",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Material UI",
  "MongoDB",
  "firebase",
  "expo",
  "NativeWind",
  "ionic",
  "capacitor",
];

export const titles = [
  "Fronted Heavy Full Stack Developer",
  "Web Designer",
  "Cross Platform Developer",
  "Responsive UI Expert",
  "Modern Design Enthusiast",
];

export const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const slideInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const contactItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
