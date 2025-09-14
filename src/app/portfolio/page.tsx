'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import projects from "@/project_article/project_list";
import { getProjectString } from "@/model/project";
import { useTranslation } from "react-i18next";

export default function Portfolio(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('portfolio.title')}
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          {t('portfolio.description')}
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
                    <p className="text-base text-gray-500 mt-1">{getProjectString(project.projectType)}</p>
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

        {/* <div className="mt-16 text-center">
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
        </div> */}
      </div>
    </div>
  );
}
