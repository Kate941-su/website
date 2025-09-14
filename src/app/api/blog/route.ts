import { NextResponse } from "next/server";
import { loadMarkdownPosts } from "@/blog_article/md-reader";

export async function GET(): Promise<NextResponse> {
  try {
    const posts = loadMarkdownPosts().filter(post => post.published);

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}

export async function POST(): Promise<NextResponse> {
  return NextResponse.json(
    { error: "Creating posts not supported for static blog" },
    { status: 405 },
  );
}
