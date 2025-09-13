import { JobHistory } from "@/model/education";

const jobHistoryList: JobHistory[] = [
  {
    title: "Software Engineer",
    started_at: new Date(2022, 3, 1), // April 2022
    ended_at: undefined, // Current position
    company_name: "Tech Solutions Inc.",
    description:
      "Full-stack web development using React, TypeScript, and Node.js. Developed and maintained multiple client applications, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    title: "Research Assistant",
    started_at: new Date(2020, 8, 1), // September 2020
    ended_at: new Date(2022, 2, 28), // March 2022
    company_name: "Nagoya Institute of Technology",
    description:
      "Conducted research on molecular dynamics simulations of 2D systems. Developed computational models using Python and C++ for studying molecular behavior in Stirling engines. Published research findings and presented at academic conferences.",
  },
  {
    title: "Teaching Assistant",
    started_at: new Date(2020, 4, 1), // May 2020
    ended_at: new Date(2021, 3, 31), // April 2021
    company_name: "Nagoya Institute of Technology",
    description:
      "Assisted in undergraduate physics courses including laboratory sessions and tutorial classes. Helped students with computational physics problems and provided guidance on simulation software usage.",
  },
  {
    title: "Intern Software Developer",
    started_at: new Date(2019, 6, 1), // July 2019
    ended_at: new Date(2019, 8, 31), // September 2019
    company_name: "StartUp Tech Lab",
    description:
      "Summer internship focused on web development and user interface design. Worked with HTML, CSS, JavaScript, and learned modern frontend frameworks. Contributed to the development of a customer management system.",
  },
];

export { jobHistoryList };
