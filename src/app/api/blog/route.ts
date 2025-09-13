import { NextRequest, NextResponse } from "next/server";
import { BlogPost, BlogPostInput } from "@/lib/mongodb/models";
import { mockCollection } from "@/lib/mongodb/mock-db";

export async function GET(): Promise<NextResponse> {
  try {
    const posts = await mockCollection
      .find({ published: true })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: BlogPostInput = await request.json();

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = body.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    const newPost: Omit<BlogPost, "_id"> = {
      ...body,
      readTime: `${readTime} min read`,
      published: body.published ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await mockCollection.insertOne(newPost);

    return NextResponse.json(
      { message: "Blog post created", id: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}
