import '@/client/styles/profilecard.scss';
import { ClipboardAction } from './ClipboardAction';
import CallToAction from './CallToAction';


export default function ProfileSection() {
	return (
		<section className="profile__hero">
			<ProfileCard />
			<ProfileIntroduction />
			<span className="profile__hero__crossout">
				For all intents and purposes, please tread lightly.
			</span>
		</section>
	)
}

export function ProfileCard() {
	return (
		<div className="profile-card">
			<div className="profile-card__avatar" />
			<div className="profile-card__fields">
				<ProfileCardField icon="github" label="GitHub" />
				<ProfileCardField icon="github" label="LinkedIn" />
				<ProfileCardField icon="github" label="Spotify" />
			</div>
		</div>
	)
}

type ProfileCardFieldProps = {
	icon: string;
	label: string;
}

function ProfileCardField({ icon, label }: ProfileCardFieldProps) {
	return (
		<div className="profile-card__field">
			<div className="profile-card__field-image">
				<img src={`/ui/icons/${icon}.svg`} alt={label} />
			</div>
			<div className="profile-card__field-label">
				<span>
					{label}
				</span>
			</div>
		</div>
	)
}

// Right side to the ProfileCard component

export function ProfileIntroduction() {
	return (
		<div className="profile-introduction">
			<h1 className="profile-introduction__name">
				Kevin Erdogan
			</h1>
			<p className="profile-introduction__subheader">
				Full Stack Engineer
			</p>
			<p className="profile-introduction__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tempor diam. Proin elementum velit venenatis sagittis lobortis. Praesent nulla augue, aliquet non metus quis, molestie viverra ex. Curabitur vel magna quis purus porta rutrum a eleifend enim. Phasellus quis tempus  elit. Mauris metus tortor, tristique sed lobortis et, venenatis non  dolor. Nunc commodo, justo id volutpat ullamcorper, massa odio commodo  ipsum, ut imperdiet tortor ante a augue.
			</p>
			<div className="profile-introduction__cta">
				<CallToAction text="Let's Connect" style="small" />
				<ClipboardAction label="applications@fofx.zip" data="applications@fofx.zip" />
			</div>
		</div>
	)
}
