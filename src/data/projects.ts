import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Chat App MERN",
    title: "Chat App",
    description:
      "A responsive and interactive chat application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. The app enables real-time messaging, features a sleek user interface built with React, and uses MongoDB for efficient data storage. It ensures seamless performance across devices.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Sohamnayak4/ChatApp",
    url: "https://chat.sohamnayak.tech",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "Tailwind",
      "Expresss",
      "Socket.io",
    ],
  },
  {
    id: "Task Manager MERN",
    title: "Task Manager",
    description:
      "A feature-rich task manager application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create, update, and manage tasks efficiently, with a dynamic React-based frontend and a robust backend powered by Express and Node.js. MongoDB ensures scalable and reliable data storage, providing a seamless user experience across devices.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Sohamnayak4/Task-Manager-app",
    url: "https://task.sohamnayak.tech",
    tags: ["React.js", "Node.js", "Express", "Tailwind", "Expresss"],
  },
  {
    id: "FocusTube Landing Page",
    title: "FocusTube",
    description:
      "A modern and visually appealing landing page designed for FocusTube, a SaaS productivity tool tailored for YouTube users. The page highlights key features, benefits, and subscription plans, with a clean and responsive design that ensures an engaging user experience across all devices. Built to attract and convert visitors effectively.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sohamnayak4",
    url: "https://focustube.sohamnayak.tech",
    tags: ["React.js", "Node.js", "Express", "Tailwind", "Expresss"],
  },
];
export default projects;
