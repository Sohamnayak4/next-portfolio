import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Development Engineering Intern",
    company: "Matiks",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Developed seamless features for the React frontend.",
      "Enhanced performance and user experience across devices.",
      "Migrated equivalent features to a Go-based GraphQL server using gqlgen.",
      "Implemented and tested resolvers for efficient data fetching and mutations.",
      "Gained expertise in Node.js and Go server architectures."
    ],
  },
  {
    designation: "Teaching Assistant",
    company: "IIT Bombay",
    startDate: "Jul 2024",
    endDate: "Oct 2024",
    isCurrentJob: false,
    location: "Mumbai, India",
    description: [
      "Helped teach a class of fifty students the concepts of Business Models and Entrepreneurship.",
      "Guided them through case studies and real-world examples to develop a deeper understanding of business strategies.",
    ],
  },
  
];

export default experiences;
