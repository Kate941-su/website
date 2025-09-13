"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function Blog(): JSX.Element {
  const { data, isLoading, error } = useBlogPosts();

  if (isLoading) {
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
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl">
          <Card className="border-red-200">
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-semibold text-red-800 mb-2">
                Error Loading Blog Posts
              </h1>
              <p className="text-red-600">
                Unable to load blog posts. Please try again later.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const blogPosts = data?.posts || [];

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
          {blogPosts.map((post) => (
            <Card key={post._id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      <Link
                        href={`/blog/${post._id}`}
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
                    href={`/blog/${post._id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to get notified about new blog posts and research
              updates.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
