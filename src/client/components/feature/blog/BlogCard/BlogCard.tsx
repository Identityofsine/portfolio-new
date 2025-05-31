"use client";

import { Blog } from "@/api/interfaces/blog.interface";
import TagElement from "../Tag/Tag";
import "./BlogCard.scss";

type BlogCardProps = {
  blog: Blog;
};

function BlogCard({ blog }: BlogCardProps) {
  function handleClick() {
    // Handle click event, e.g., navigate to blog details page
    window.location.href = `/blog/${blog.id}`;
  }

  function handleMiddleClick(event: React.MouseEvent) {
    // Handle middle click event, e.g., open in a new tab
    if (event.button === 1) {
      window.open(`/blog/${blog.id}`, "_blank");
    }
  }

  return (
    <div
      className="blog-card"
      onClick={handleClick}
      onAuxClick={handleMiddleClick}
    >
      <div className="blog-card-image">
        <img src={blog.image} alt="Blog Post" />
      </div>
      <div className="blog-card-content">
        <h2>{blog.title}</h2>
        <div className="tag-line">
          {blog.tags?.map((tag) => <TagElement key={tag.id} tag={tag} />)}
        </div>
        <p>{blog.content?.substring(0, 100) + "..."}</p>
      </div>
    </div>
  );
}

export default BlogCard;
