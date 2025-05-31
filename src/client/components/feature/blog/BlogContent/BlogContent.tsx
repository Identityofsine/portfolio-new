import { Blog } from "@/api/interfaces/blog.interface";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogContent.scss";

type BlogContent = {
  blogs: Blog[];
};

function BlogContent({ blogs }: BlogContent) {
  return (
    <div className="blog-container">
      {blogs.map((item) => (
        <BlogCard key={item.id} blog={item} />
      ))}
    </div>
  );
}

export default BlogContent;
