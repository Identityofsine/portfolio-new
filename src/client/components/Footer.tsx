import '@/client/styles/footer.scss';
import CallToAction from './CallToAction';

export default function Footer() {
	return (
		<footer className="footer">
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
						<source src="/video/tva-timedoor-hd.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</footer>
	)
}
