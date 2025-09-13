import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    title: "Sample Research Paper Title",
    authors: "Your Name, Co-Author Name, Another Author",
    journal: "Journal of Academic Research",
    year: 2024,
    doi: "10.1000/sample.doi",
    abstract:
      "This is a sample abstract for a research paper. It provides a brief overview of the research methodology, findings, and implications.",
  },
  {
    title: "Another Important Publication",
    authors: "Your Name, Colleague Name",
    journal: "International Conference on Research",
    year: 2023,
    doi: "10.1000/another.doi",
    abstract:
      "Another sample abstract describing the key contributions and methodology of this research work.",
  },
];

export default function Publications(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Publications</h1>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 hover:text-blue-800">
                  {pub.title}
                </CardTitle>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p>
                    <strong>Published in:</strong> {pub.journal} ({pub.year})
                  </p>
                  {pub.doi && (
                    <p>
                      <strong>DOI:</strong>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        {pub.doi}
                      </a>
                    </p>
                  )}
                </div>
              </CardHeader>
              {pub.abstract && (
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Find me on academic platforms
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Google Scholar
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              ORCID
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              ResearchGate
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Academia.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
