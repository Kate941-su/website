import { NextRequest, NextResponse } from "next/server";
import postList from "@/blog_article/post_list";

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
): Promise<NextResponse> {
  try {
    const { id } = params;

    const post = postList.find(p => p.slug === id && p.published);

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 },
    );
  }
}

export async function PUT(): Promise<NextResponse> {
  return NextResponse.json(
    { error: "Updates not supported for static posts" },
    { status: 405 },
  );
}

export async function DELETE(): Promise<NextResponse> {
  return NextResponse.json(
    { error: "Deletion not supported for static posts" },
    { status: 405 },
  );
}
