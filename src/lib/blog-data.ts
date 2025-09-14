import { loadMarkdownPosts } from "@/blog_article/md-reader";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  readTime: string;
}

export function getBlogPosts(): BlogPost[] {
  return loadMarkdownPosts().filter(post => post.published);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = loadMarkdownPosts();
  return posts.find(p => p.slug === slug && p.published);
}