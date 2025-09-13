'use client'

import { useParams } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import { useEffect, useState } from 'react'

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  tags: string[];
  author: string;
  createdAt: string;
  readTime: string;
}


export default function BlogPostPage(): JSX.Element {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params.id) {
      fetch(`/api/blog/${params.id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Post not found')
          }
          return res.json()
        })
        .then(data => {
          setPost(data.post)
          setIsLoading(false)
        })
        .catch(err => {
          setError(err.message)
          setIsLoading(false)
        })
    }
  }, [params.id])

  // if (isLoading) {
  //   return (
  //     <div className="container mx-auto px-6 py-8">
  //       <div className="max-w-4xl">
  //         <div className="animate-pulse">
  //           <div className="h-8 bg-gray-200 rounded mb-4"></div>
  //           <div className="h-4 bg-gray-200 rounded mb-2"></div>
  //           <div className="h-4 bg-gray-200 rounded mb-8"></div>
  //           <div className="space-y-4">
  //             <div className="h-4 bg-gray-200 rounded"></div>
  //             <div className="h-4 bg-gray-200 rounded"></div>
  //             <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // if (error || !data?.post) {
  //   return (
  //     <div className="container mx-auto px-6 py-8">
  //       <div className="max-w-4xl">
  //         <Card className="border-red-200">
  //           <CardContent className="p-8 text-center">
  //             <h1 className="text-xl font-semibold text-red-800 mb-2">
  //               Post Not Found
  //             </h1>
  //             <p className="text-red-600 mb-4">
  //               The blog post you're looking for doesn't exist or has been removed.
  //             </p>
  //             <Link
  //               href="/blog"
  //               className="inline-flex items-center text-blue-600 hover:text-blue-800"
  //             >
  //               <ArrowLeft className="w-4 h-4 mr-2" />
  //               Back to Blog
  //             </Link>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     </div>
  //   )
  // }

  if (error || !post) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl">
          <Card className="border-red-200">
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-semibold text-red-800 mb-2">
                Post Not Found
              </h1>
              <p className="text-red-600 mb-4">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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