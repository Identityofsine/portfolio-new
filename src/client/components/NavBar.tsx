'use client';

import '@/client/styles/nav.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavBar() {

	const glow = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState<number>(0);
	const router = useRouter();

	useEffect(() => {
		const page = window.location.pathname;
		assignCurrent(page as 'home' | 'about' | 'projects' | 'contact');
	}, [])

	useEffect(() => {
		if (glow.current) {

		}
	}, [current])

	const assignCurrent = (pages: 'home' | 'about' | 'projects' | 'contact') => {
		switch (pages) {
			case 'home':
				setCurrent(0);
				break;
			case 'about':
				setCurrent(1);
				break;
			case 'projects':
				setCurrent(2);
				break;
			case 'contact':
				setCurrent(3);
				break;
		}
	}

	return (
		<nav className="navbar">
			<div className="navbar__element__glow" ref={glow} />
			<div id="navbar__element" className="navbar__element">
				<div className="navbar__element__content">
					<NavBarElement label="Home" path="/" />
					<NavBarElement label="Home" path="/" />
					<NavBarElement label="Home" path="/" />
					<NavBarElement label="Home" path="/" />
					<NavBarElement label="Home" path="/" />
				</div>
			</div>
		</nav>
	)
}

type NavBarElementProps = {
	label: string;
	path: string;
}

export function NavBarElement({ label, path }: NavBarElementProps) {

	const router = useRouter();

	function go() {
		router.push(path);
	}

	return (
		<div className={`navbar__element__option`} onClick={go}>
			<span>{label}</span>
		</div>
	)
}
