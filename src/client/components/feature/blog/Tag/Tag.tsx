import { Tag } from "@/api/interfaces/blog.interface";
import "./Tag.scss";

type TagProps = {
  tag: Tag;
};

function TagElement({ tag }: TagProps) {
  return (
    <div className="blog-tag">
      <span>{tag.name}</span>
    </div>
  );
}

export default TagElement;
