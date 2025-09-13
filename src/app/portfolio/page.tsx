import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  year: number;
}

const projects: Project[] = [
  {
    title: "Research Project 1",
    description:
      "A comprehensive research project involving data analysis and machine learning techniques to solve real-world problems. This project demonstrates the application of advanced algorithms in practical scenarios.",
    image: "/project1.jpg",
    technologies: ["Python", "TensorFlow", "Jupyter", "Pandas"],
    githubUrl: "https://github.com/yourusername/project1",
    demoUrl: "https://demo.project1.com",
    year: 2024,
  },
  {
    title: "Academic Tool",
    description:
      "An open-source tool developed to assist researchers and academics in their work. Features include data visualization, statistical analysis, and collaborative features.",
    image: "/project2.jpg",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project2",
    year: 2023,
  },
  {
    title: "Data Analysis Pipeline",
    description:
      "A robust data processing pipeline designed for large-scale academic research. Includes automated data collection, cleaning, and analysis capabilities.",
    technologies: ["Python", "Docker", "PostgreSQL", "Apache Airflow"],
    githubUrl: "https://github.com/yourusername/project3",
    year: 2023,
  },
];

export default function Portfolio(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h1>

        <p className="text-lg text-gray-600 mb-12">
          Here are some of the projects I've worked on, ranging from research
          tools to data analysis pipelines. Each project represents a different
          aspect of my academic and technical interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="h-48 w-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                <FolderOpen className="w-12 h-12 text-gray-400" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{project.year}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-700 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new research opportunities and
            collaborative projects.
          </p>
          <a
            href="mailto:your.email@university.edu"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
