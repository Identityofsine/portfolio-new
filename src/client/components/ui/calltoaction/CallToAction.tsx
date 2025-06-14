import "./CallToAction.scss";

type CallToActionProps = {
	text: string;
	style?: 'big' | 'small';
	onClick?: () => void;
}

export default function CallToAction({ text, onClick, style = 'big' }: CallToActionProps) {
	return (
		<div className={`cta-button ${style}`} onClick={onClick}>
			<span>{text}</span>
			<img src="/ui/go.svg" alt="Go" />
		</div>
	)
}
