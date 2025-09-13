export interface BlogPost {
  _id?: string;
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

export interface BlogPostInput {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  tags: string[];
  author: string;
  published?: boolean;
}

export const COLLECTIONS = {
  BLOG_POSTS: "blogPosts",
} as const;
