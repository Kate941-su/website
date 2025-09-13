import { Project } from "@/model/project";
const projects: Project[] = [
  {
    title: "Dart Unused Remover",
    projectType: "oss",
    description:
      "you must feel annoying when developing some mobile applications with Flutter. Ohhh 'Unused [something]'..... Once you install it and execute this command and remove all of them automatically.",
    image: "/project1.jpg",
    technologies: ["Dart", "Flutter"],
    githubUrl: "https://github.com/Kate941-su/Dart_unused_import_remover",
    demoUrl: "https://pub.dev/packages/unused_import_remover",
    year: 2023,
  },
  {
    title: "fresult",
    projectType: "oss",
    description:
      "A Dart package providing Result types for better error handling using Freezed. This package helps you write more robust and functional code by avoiding exceptions and providing type-safe error handling.",
    image: "/project2.jpg",
    technologies: ["Dart", "Flutter"],
    githubUrl: "https://github.com/Kate941-su/freezed_result",
    demoUrl: "https://pub.dev/packages/fresult",
    year: 2025,
  },
  {
    title: "QRCodeGenExt",
    projectType: "oss",
    description:
      "This is a google chrome extension application for generating QR Code from the URL you are opening tabs in Chrome.",
    technologies: ["Typescript", "Chrome Extension"],
    githubUrl:
      "https://chromewebstore.google.com/detail/qr-code-generator/hanligmhempdkemnppnngllpjbcblepk",
    demoUrl: "https://github.com/Kate941-su/QRCodeGenExt",
    year: 2025,
  },
  {
    title: "Dental Web Site 1",
    projectType: "web_app",
    description:
      "My client demanded that this web site is supposed to be simple to be friendly for every generation especially olders. I created this web site and enhance the client's voice.",
    image: "/project1.jpg",
    technologies: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://hamamatsu-nakaze-dental.com/",
    year: 2023,
  },
  {
    title: "Dental Web Site 2",
    projectType: "web_app",
    description:
      "This website is also created and with the concept of 'Be simple'. I try to create to be simple and be familier with old generations",
    image: "/project1.jpg",
    technologies: ["NextJS", "Typescript"],
    demoUrl: "https://okazaki-iwasedc.com/",
    year: 2024,
  },
];

export default projects;
