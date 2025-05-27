'use client';

import Input from "@/client/components/ui/input/Input"
import "./BlogForm.scss"
import ToggleButton from "@/client/components/ui/togglebutton/ToggleButton";

function BlogForm() {
	return (
		<div className="filter-bar">
			<ToggleButton className="file-tree-toggle">
				<i className="fi fi-rr-folder-tree" />
				<span>Enable File Tree Mode</span>
			</ToggleButton>
			<Input
				type="text"
				placeholder="Search posts..."
			/>
		</div>
	)
}

export default BlogForm
