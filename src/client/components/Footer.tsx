import '@/client/styles/footer.scss';
import CallToAction from './CallToAction';
import { BRAND_SETTINGS } from '@/app/brand.settings';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__content">
					<div className="footer__content__container">
						<div className="footer__content__title">
							<h2 className="footer__content__title__text">
								Let’s Work Together
							</h2>
						</div>
						<div className="footer__content__body">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac  tempor diam. Proin elementum velit venenatis sagittis lobortis. Praesent nulla augue, aliquet non metus quis, molestie viverra ex. Curabitur vel magna quis purus porta rutrum a eleifend enim. Phasellus quis tempus  elit.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac  tempor diam. Proin elementum velit venenatis sagittis lobortis.
							</p>
						</div>
						<div className="footer__content__cta">
							<CallToAction text="Let's Connect" />
						</div>
						<div className="footer__content__subcontainer">
							<div className="footer__content__subcontainer__title">
								<h3 className="footer__content__subcontainer__title__text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</h3>
								<p className="footer__content__subcontainer__title__description">
									Mauris metus tortor, tristique sed lobortis et, venenatis non dolor.  Nunc commodo, justo id volutpat ullamcorper, massa odio commodo ipsum
								</p>
							</div>
						</div>
					</div>
					<div className="footer__background__container">
						<video className="footer__background" autoPlay loop muted>
							<source src="/video/timedoor.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="divider" />
					<div className="footer__bottom__content">
						<div className="footer__bottom__content__container">
							<h2>Kevin Erdogan</h2>
							<p>With careful and passionate engineering, I aim to create your dream for you.</p>
						</div>
						<div className="footer__bottom__content__container__links">
							<h2>General</h2>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Work</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Blog</a></li>
							</ul>
						</div>
						<div className="footer__bottom__content__container__links">
							<h2>Extras</h2>
							<ul>
								<li><a href="#">Photography</a></li>
								<li><a href="#">Goals</a></li>
							</ul>
						</div>
						<div className="footer__bottom__content__container__contact">
							<p>Mauris metus tortor, tristique sed lobortis et, venenatis non dolor !</p>
							<a href={`mailto:${BRAND_SETTINGS.contact.personal}`}>
								<span>
									{BRAND_SETTINGS.contact.personal}
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
