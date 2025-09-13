import { NextRequest, NextResponse } from "next/server";
import { BlogPost } from "@/lib/mongodb/models";
import { mockCollection } from "@/lib/mongodb/mock-db";

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
): Promise<NextResponse> {
  try {
    const { id } = params;

    const post = await mockCollection.findOne({ _id: id, published: true });

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

export async function PUT(
  request: NextRequest,
  { params }: { params: Params },
): Promise<NextResponse> {
  try {
    const { id } = params;
    const body = await request.json();

    const updateData = {
      ...body,
      updatedAt: new Date(),
    };

    const result = await mockCollection.updateOne(
      { _id: id },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Blog post updated" });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params },
): Promise<NextResponse> {
  try {
    const { id } = params;

    const result = await mockCollection.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Blog post deleted" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 },
    );
  }
}
