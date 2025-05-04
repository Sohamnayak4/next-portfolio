import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Cold Message Generator",
    title: "MessageCraft",
    description:
      "A cold message generator built with React, Supabase, and Tailwind CSS, designed to help users create personalized and effective outreach messages. It features a responsive and minimal UI, real-time message preview, and dynamic input fields for customizing templates. Supabase handles user authentication and data storage, ensuring a smooth and secure user experience.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Sohamnayak4/message-craft-flow",
    url: "https://message-craft-flow.vercel.app/",
    tags: [
      "React.js",
      "Tailwind",
      "SupaBase",
      "Stripe",
    ],
  },
  {
    id: "Chat App MERN",
    title: "Chat App",
    description:
      "A responsive and interactive chat application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. The app enables real-time messaging, features a sleek user interface built with React, and uses MongoDB for efficient data storage.",
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
      "A feature-rich task manager application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create, update, and manage tasks efficiently, with a dynamic React-based frontend and a robust backend powered by Express and Node.js.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Sohamnayak4/Task-Manager-app",
    url: "https://tasks.sohamnayak.tech",
    tags: ["React.js", "Node.js", "Express", "Tailwind", "Expresss"],
  },
  {
    id: "FocusTube Landing Page",
    title: "FocusTube",
    description:
      "A modern and visually appealing landing page designed for FocusTube, a SaaS productivity tool tailored for YouTube users. The page highlights key features, benefits, and subscription plans, with a clean and responsive design that ensures an engaging user experience across all devices.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sohamnayak4",
    url: "https://focustube.sohamnayak.tech",
    tags: ["React.js", "Node.js", "Express", "Tailwind", "Expresss"],
  },
];
export default projects;
