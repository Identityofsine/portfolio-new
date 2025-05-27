import BlogCard from "../BlogCard/BlogCard"
import './BlogContent.scss'

function BlogContent() {
	return (
		<div className="blog-container">
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
		</div>
	)
}

export default BlogContent
