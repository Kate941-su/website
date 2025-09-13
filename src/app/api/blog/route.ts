import { NextResponse } from "next/server";
import postList from "@/blog_article/post_list";

export async function GET(): Promise<NextResponse> {
  try {
    const posts = postList
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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
