import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { educationList } from "./education_list";
import { jobHistoryList } from "./job_history_list";
import { frameworkList, programmingLanguageList } from "./skill_list";

export default function CV(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Curriculum Vitae</h1>
          <a
            href="../../../static/document/cv.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {educationList.map((education) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{education.title}</CardTitle>
                <div className="text-gray-600 text-sm">
                  <p>{education.university_name} | {education.started_at.getFullYear()} - {education.ended_at.getFullYear()}</p>
                  <p className="mt-1">
                    <strong>Description: </strong> {education.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
            ))
            }
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Job Experience
          </h2>
          <div className="space-y-4">
            {jobHistoryList.map((job) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {job.title}
                </CardTitle>
                <div className="text-gray-600 text-sm">
                  <p>{job.company_name} | {job.started_at.getFullYear()} - {job.ended_at?.getFullYear() ?? "Present"}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  {job.description}
                </p>
              </CardContent>
            </Card>
            ))}
          </div>
        </section>

        {/* Awards & Honors */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Awards & Honors
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Outstanding Graduate Student Award
                </h3>
                <p className="text-gray-600 text-sm">University Name</p>
              </div>
              <span className="text-gray-500 text-sm">2024</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Best Paper Award
                </h3>
                <p className="text-gray-600 text-sm">
                  International Conference Name
                </p>
              </div>
              <span className="text-gray-500 text-sm">2023</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Graduate Fellowship
                </h3>
                <p className="text-gray-600 text-sm">Funding Organization</p>
              </div>
              <span className="text-gray-500 text-sm">2022</span>
            </div>
          </div>
        </section> */}

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguageList.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworkList.map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Publications Summary */}
        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Publications Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">15</div>
              <div className="text-sm text-gray-600">Journal Articles</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">8</div>
              <div className="text-sm text-gray-600">Conference Papers</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-700">3</div>
              <div className="text-sm text-gray-600">Book Chapters</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">245</div>
              <div className="text-sm text-gray-600">Citations</div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
