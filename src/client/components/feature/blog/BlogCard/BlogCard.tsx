import Tag from '../Tag/Tag'
import './BlogCard.scss'

function BlogCard() {
	return (
		<div className="blog-card">
			<div className="blog-card-image">
				<img src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post" />
			</div>
			<div className="blog-card-content">
				<h2>My Experience With Mimi</h2>
				<div className="tag-line">
					<Tag />
				</div>
				<p>Mimi, Bibi, Kuromi. How it all started... </p>
			</div>

		</div>
	)
}

export default BlogCard
