export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  year: number;
  projectType: ProjectionType;
};

type ProjectionType = "oss" | "mobile_app" | "web_app" | "desktop_app";

const getProjectString = (type: ProjectionType): string => {
  switch (type) {
    case "oss":
      return "OSS";
    case "mobile_app":
      return "Mobile Application";
    case "web_app":
      return "Web Application";
    case "desktop_app":
      return "Desktop Application";
  }
};

export { getProjectString };
