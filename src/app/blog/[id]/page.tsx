import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import { getBlogPost, getBlogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    id: post.slug,
  }))
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps): JSX.Element {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }


  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-code:text-pink-600 prose-pre:bg-gray-100">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </Markdown>
              </div>
            </CardContent>
          </Card>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Was this article helpful? Have questions or feedback?
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:your.email@university.edu"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Get in touch
                </a>
                <span className="text-gray-300">|</span>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read more posts
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}