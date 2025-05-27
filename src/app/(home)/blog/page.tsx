import "@/app/styles/page.scss";
import "./blog.scss";
import Input from "@/client/components/ui/input/Input";
import BlogForm from "@/client/components/feature/blog/BlogForm/BlogForm";
import BlogContent from "@/client/components/feature/blog/BlogContent/BlogContent";

export default function Home() {
	return (
		<div className="page blog">
			<div className="blog-wrapper">
				<div className="blog-header">
					<h1>My Blog</h1>
					<BlogForm />
					<div className="divider" />
				</div>
				<BlogContent />
			</div>
		</div>
	);
}
