import '@/client/styles/profilecard.scss';

export default function ProfileCard() {
	return (
		<div className="profile-card">
			<div className="profile-card__avatar" />
			<div className="profile-card__fields">
				<div className="profile-card__field">
					<div className="profile-card__field-image">
						<img src="/ui/icons/github.svg" alt="GitHub" />
					</div>
					<div className="profile-card__field-label">GitHub</div>
				</div>
			</div>
		</div>
	)
}
