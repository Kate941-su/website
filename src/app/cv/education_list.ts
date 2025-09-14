import { Education, JobHistory } from "@/model/education";

const educationList: Education[] = [
  {
    title: "Master Degree of Physics",
    started_at: new Date(2020, 4, 1),
    ended_at: new Date(2022, 3, 31),
    university_name: "Nagoya Institute of Technology",
    description:
      "Study of morecular dynamics of 2 dimensions with computer simulation and find a law of how moreculars are moving in Stirling engine.",
  },
  {
    title: "Bachelor Degree of Physics",
    started_at: new Date(2016, 4, 1),
    ended_at: new Date(2020, 3, 31),
    university_name: "Nagoya Institute of Technology",
    description:
      "Study basic of physics and learn about morecular simulation with computer science.",
  },
];

export { educationList };
