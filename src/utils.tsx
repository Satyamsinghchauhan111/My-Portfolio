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
  {
    id: "6",
    title: "YoBiz",
    description: `The project was a B2C web platform designed for individual retailers, enabling them to instantly create and share
     digital product catalogs, promotional posts, and product links to boost online visibility and sales. It also featured ad banner 
     placements to help retailers promote their products effectively.
     `,
    role: `As a Frontend Developer, I was responsible for building responsive, user-friendly interfaces using React.js,
     TypeScript, and Tailwind CSS. My work focused on delivering smooth navigation, dynamic content rendering, 
     and visually engaging experiences optimized for both mobile and desktop. I also ensured that notifications,
      connectivity handling, and Android system-level API integrations worked reliably and seamlessly within the application.`,
    techUsed: [
      "React Js",
      "Next Js",
      "Typescript",
      "Redux",
      "Capacitor",
      "Firebase Notification",
      "Tailwind",
      "Daisy Ui",
      "Formik",
      "Html",
      "CSS",
    ],
  },
  {
    id: "7",
    title: "ImagineClick",
    description: `The project was a service marketplace platform that connected service providers and receivers 
    for tasks such as cleaning, tile work,
     plastering, and delivery services. Users could create detailed profiles
     showcasing their skills or needs, receive personalized recommendations, search for relevant services,
      and directly message others to offer or request help.
     `,
    role: `As a Frontend Developer, I
       developed responsive, user-friendly interfaces using React.js, TypeScript, and Tailwind CSS, 
       ensuring smooth navigation, real-time interaction, and a seamless experience across devices.`,
    techUsed: [
      "React Js",
      "Typescript",
      "Context Api",
      "Material Ui",
      "Formik",
      "Graph Ql",
      "aws Amplify",
      "Html",
      "CSS",
    ],
  },
  {
    id: "8",
    title: "YoEmbryo",
    description: `The project was a matching platform for embryo donors and receivers, 
    designed to help users connect, communicate, and find their ideal match securely. 
    Users completed a series of questionnaire-based inputs, and the system generated personalized 
    match results, allowing them to chat, send requests, and interact within the platform. 
   `,
    role: `As a Frontend Developer, 
    I was responsible for developing responsive, intuitive UI components using React.js, TypeScript, and Tailwind CSS,
     ensuring smooth user interactions, real-time updates, and a clean, accessible design that enhanced overall user experience.`,
    techUsed: [
      "React Js",
      "Typescript",
      "RTK Query",
      "Tailwind CSS",
      "Formik",
      "Daisy Ui",
      "Html",
      "CSS",
      "complex Designs",
    ],
  },
];

export const routes = [
  { name: "Home", path: "#home", icon: "🏠︎" },
  { name: "About", path: "#about", icon: "ℹ️" },
  { name: "Projects", path: "#projects", icon: "✍" },
  { name: "Contact", path: "#contact", icon: "☎️" },
];
export const techStack = [
  "React Js",
  "javascript",
  "TypeScript",
  "Next js",
  "Tailwind CSS",
  "Material UI",
  "Cypress",
  "Redux & RTK Query",
  "expo",
  "React Native",
  "NativeWind",
  "ionic",
  "capacitor",
  "firebase Notification",
];

export const titles = [
  "Frontend Developer",
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

export type SidebarItem = {
  id: string;
  label: string;
  dotColor: string;
  section?: string;
};

export const sidebarMenu: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    dotColor: "bg-emerald-400",
    section: "Menu",
  },

  {
    id: "marketing",
    label: "Marketing",
    dotColor: "bg-amber-400",
    section: "Folders",
  },

  { id: "favorites", label: "Favorites", dotColor: "bg-slate-500" },
  { id: "settings", label: "Settings", dotColor: "bg-slate-500" },
];

export const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    name: "Riya Verma",
    email: "riya.verma@example.com",
    role: "user",
    active: true,
  },
  {
    id: 3,
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    role: "user",
    active: false,
  },
  {
    id: 4,
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    role: "user",
    active: true,
  },
  {
    id: 5,
    name: "Aditya Mehta",
    email: "aditya.mehta@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 6,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    role: "user",
    active: true,
  },
  {
    id: 7,
    name: "Rohit Malhotra",
    email: "rohit.malhotra@example.com",
    role: "user",
    active: false,
  },
  {
    id: 8,
    name: "Pooja Nair",
    email: "pooja.nair@example.com",
    role: "user",
    active: true,
  },
  {
    id: 9,
    name: "Vikram Rao",
    email: "vikram.rao@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 10,
    name: "Neha Kapoor",
    email: "neha.kapoor@example.com",
    role: "user",
    active: true,
  },

  {
    id: 11,
    name: "Sahil Khanna",
    email: "sahil.khanna@example.com",
    role: "user",
    active: false,
  },
  {
    id: 12,
    name: "Ishita Bose",
    email: "ishita.bose@example.com",
    role: "user",
    active: true,
  },
  {
    id: 13,
    name: "Manish Yadav",
    email: "manish.yadav@example.com",
    role: "user",
    active: true,
  },
  {
    id: 14,
    name: "Kritika Jain",
    email: "kritika.jain@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 15,
    name: "Amit Patel",
    email: "amit.patel@example.com",
    role: "user",
    active: false,
  },
  {
    id: 16,
    name: "Nisha Choudhary",
    email: "nisha.choudhary@example.com",
    role: "user",
    active: true,
  },
  {
    id: 17,
    name: "Rahul Arora",
    email: "rahul.arora@example.com",
    role: "user",
    active: true,
  },
  {
    id: 18,
    name: "Simran Kaur",
    email: "simran.kaur@example.com",
    role: "user",
    active: true,
  },
  {
    id: 19,
    name: "Deepak Soni",
    email: "deepak.soni@example.com",
    role: "admin",
    active: false,
  },
  {
    id: 20,
    name: "Priya Mishra",
    email: "priya.mishra@example.com",
    role: "user",
    active: true,
  },
];
