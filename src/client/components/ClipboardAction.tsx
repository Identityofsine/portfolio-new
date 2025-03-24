"use client";
import "@/client/styles/clipboard.scss";
import { useState } from "react";

type ClipboardAction = {
	label: string;
	data: string;
}

export function ClipboardAction({ label, data }: ClipboardAction) {

	const [text, setText] = useState(label);

	const copyToClipboard = () => {
		setText('Copied!');
		navigator.clipboard.writeText(data);
		setTimeout(() => setText(label), 2500);
	}

	return (
		<div className="clipboard-action" onClick={copyToClipboard}>
			<img src="/ui/clipboard.svg" alt="Copy" />
			<span>{text}</span>
		</div>
	)

}
