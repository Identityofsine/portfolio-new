import { getBlogById } from "@/api/service/blog.service";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <div>My Post: {blog.id}</div>;
}
