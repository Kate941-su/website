import { Card, CardContent } from "@/components/ui/card";

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Academic Portfolio
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I am a researcher and educator passionate about [your field]. This
            portfolio showcases my publications, projects, and thoughts on
            [relevant topics]. Feel free to explore my work and get in touch if
            you'd like to collaborate.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Brief introduction about your background, research interests, and
              current position. This should give visitors a quick overview of
              who you are and what you do.
            </p>
            <p className="mb-4">
              Information about your educational background, key achievements,
              and current research focus. You can highlight your most
              significant contributions to your field here.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Research Area 1
                </h3>
                <p className="text-gray-600 text-sm">
                  Brief description of your first research interest or area of
                  expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Research Area 2
                </h3>
                <p className="text-gray-600 text-sm">
                  Brief description of your second research interest or area of
                  expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Research Area 3
                </h3>
                <p className="text-gray-600 text-sm">
                  Brief description of your third research interest or area of
                  expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Updates */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Recent Updates
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">December 2024</p>
              <p className="text-gray-900">
                New publication accepted in Journal Name
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">November 2024</p>
              <p className="text-gray-900">
                Presented research at Conference Name
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm text-gray-500 mb-1">October 2024</p>
              <p className="text-gray-900">
                Started new research project on Topic
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
