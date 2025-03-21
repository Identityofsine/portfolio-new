type ClipboardAction = {
	label: string;
	data: string;
}

export function ClipboardAction({ label, data }: ClipboardAction) {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(data);
	}

	return (
		<div className="clipboard-action" onClick={copyToClipboard}>
			<img src="/ui/clipboard.svg" alt="Copy" />
			<span>{label}</span>
		</div>
	)

}
