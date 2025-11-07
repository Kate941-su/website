import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog-data";

export default function Blog(): JSX.Element {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Thoughts, insights, and reflections on research, academia, and
            technology.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
