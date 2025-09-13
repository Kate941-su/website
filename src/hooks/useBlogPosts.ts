import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogPost, BlogPostInput } from "@/lib/mongodb/models";

const BLOG_QUERY_KEY = ["blog"];

interface BlogApiResponse {
  posts: BlogPost[];
}

interface SingleBlogApiResponse {
  post: BlogPost;
}

export const useBlogPosts = () => {
  return useQuery<BlogApiResponse>({
    queryKey: BLOG_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch("/api/blog");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      return response.json();
    },
  });
};

export const useBlogPost = (id: string) => {
  return useQuery<SingleBlogApiResponse>({
    queryKey: [...BLOG_QUERY_KEY, id],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
      return response.json();
    },
    enabled: !!id,
  });
};

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postData: BlogPostInput) => {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch blog posts
      queryClient.invalidateQueries({ queryKey: BLOG_QUERY_KEY });
    },
  });
};

export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<BlogPost>;
    }) => {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog post");
      }

      return response.json();
    },
    onSuccess: (_, { id }) => {
      // Invalidate specific post and all posts
      queryClient.invalidateQueries({ queryKey: [...BLOG_QUERY_KEY, id] });
      queryClient.invalidateQueries({ queryKey: BLOG_QUERY_KEY });
    },
  });
};

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch blog posts
      queryClient.invalidateQueries({ queryKey: BLOG_QUERY_KEY });
    },
  });
};
