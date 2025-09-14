import { JobHistory } from "@/model/education";

const jobHistoryList: JobHistory[] = [
  {
    title: "Mid Software Engineer",
    started_at: new Date(2024, 10, 1), // April 2022
    ended_at: undefined, // Current position
    company_name: "Papyrus GmbH",
    description:
      "Develop mobile applications with Swift, Kotlin, React Native.",
  },
  {
    title: "Mid Software Engineer",
    started_at: new Date(2023, 5, 1), // September 2020
    ended_at: new Date(2024, 9, 30), // March 2022
    company_name: "miracleave",
    description:
      "Develop mobile applications and libraries used in the application with Flutter, Swift, Kotlin.",
  },
  {
    title: "Junior Software Engineer",
    started_at: new Date(2022, 4, 1), // May 2020
    ended_at: new Date(2023, 5, 1), // April 2021
    company_name: "YAMAHA Corporation",
    description: "Emmbeded low lovel systems with C.",
  },
  {
    title: "Software Engineer Intern",
    started_at: new Date(2021, 2, 1), // July 2019
    ended_at: new Date(2022, 3, 31), // September 2019
    company_name: "Ibis",
    description: "Develop a painting application with C++/JAVA/Objective-C.",
  },
];

export { jobHistoryList };
