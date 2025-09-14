import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

interface BlogPost {
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

interface PostMetadata {
  id?: string;
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

const defaultMetadata: Partial<PostMetadata> = {
  author: "Your Name",
  published: true,
  tags: [],
};

function parseMarkdownFile(filePath: string, filename: string): BlogPost {
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract frontmatter if exists
  let metadata: Partial<PostMetadata> = {};
  let markdownContent = content;

  if (content.startsWith("---")) {
    const frontmatterEnd = content.indexOf("---", 3);
    if (frontmatterEnd !== -1) {
      const frontmatter = content.slice(3, frontmatterEnd).trim();
      markdownContent = content.slice(frontmatterEnd + 3).trim();

      // Simple frontmatter parsing
      frontmatter.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length) {
          const value = valueParts.join(":").trim();
          const trimmedKey = key.trim();

          if (
            trimmedKey === "tags" &&
            value.startsWith("[") &&
            value.endsWith("]")
          ) {
            (metadata as any)[trimmedKey] = JSON.parse(value);
          } else if (trimmedKey === "published") {
            (metadata as any)[trimmedKey] = value.toLowerCase() === "true";
          } else {
            (metadata as any)[trimmedKey] = value.replace(/^["']|["']$/g, "");
          }
        }
      });
    }
  }

  // Generate slug from filename if not provided
  const slug = metadata.slug || filename.replace(".md", "");

  // Generate title if not provided
  const title =
    metadata.title ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // Calculate reading time
  const wordCount = markdownContent.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  // Generate excerpt if not provided
  const excerpt =
    metadata.excerpt ||
    markdownContent.slice(0, 150).replace(/\n/g, " ") + "...";

  return {
    id: metadata.id || uuidv4(),
    title,
    content: markdownContent,
    excerpt,
    slug,
    tags: metadata.tags || defaultMetadata.tags || [],
    author: metadata.author || defaultMetadata.author || "Your Name",
    createdAt: metadata.createdAt ? new Date(metadata.createdAt) : new Date(),
    updatedAt: metadata.updatedAt ? new Date(metadata.updatedAt) : new Date(),
    published:
      metadata.published !== undefined
        ? metadata.published
        : defaultMetadata.published || true,
    readTime: `${readTime} min read`,
  };
}

export function loadMarkdownPosts(): BlogPost[] {
  const mdDir = path.join(process.cwd(), "src/blog_article/md");

  if (!fs.existsSync(mdDir)) {
    return [];
  }

  const files = fs.readdirSync(mdDir).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const filePath = path.join(mdDir, file);
      return parseMarkdownFile(filePath, file);
    })
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
