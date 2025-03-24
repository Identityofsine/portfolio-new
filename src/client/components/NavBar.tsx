'use client';

import '@/client/styles/nav.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const GLOW_WIDTH = 2.2500;
const NAVBAR_PADDING = 0.15;
const NAVBAR_OPTION_WIDTH = 7.0833;
const NAVBAR_FLEX_GAP = 0.333

type Pages = 'home' | 'about' | 'work' | 'blog';

type PageSchema = { [key in Pages]: { 'path': string, active: boolean } };

//pages with their respective paths
const pagesPath: PageSchema = {
	home: { path: '/', active: false },
	work: { path: '/work', active: false },
	about: { path: '/about', active: false },
	blog: { path: '/blog', active: false }
};

export default function NavBar() {

	const glow = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState<number>(0);
	const [pages, setPages] = useState<PageSchema>(pagesPath);
	const router = useRouter();

	useEffect(() => {
		const page = window.location.pathname;
		assignCurrent(page as 'home' | 'about' | 'projects' | 'contact');
	}, [])

	useEffect(() => {
		if (glow.current) {
			const element = glow.current;
			element.style.left = `${((NAVBAR_OPTION_WIDTH + NAVBAR_FLEX_GAP) * current) + (NAVBAR_OPTION_WIDTH / 2) + NAVBAR_PADDING * 2 - GLOW_WIDTH / 2}rem`;
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

	const NavBarElementOnClick = (page: Pages, idx: number) => {
		const newPages = { ...pages };
		Object.keys(newPages).forEach((key) => {
			newPages[key as Pages].active = false;
		})
		newPages[page].active = true;
		setPages(newPages);
		setCurrent(idx);
		router.replace(pages[page].path, {});
	}

	return (
		<nav className="navbar">
			<div style={{ position: 'relative' }}>
				<div className="navbar__element__glow" ref={glow} />
				<div id="navbar__element" className="navbar__element">
					<div className="navbar__element__content">
						{Object.keys(pages).map((page, index) => {
							return (<NavBarElement
								key={index}
								label={`${page.at(0)!.toUpperCase()}${page.slice(1, page.length)}`}
								path={pages[page as Pages].path}
								active={pages[page as Pages].active}
								onClick={() => {
									NavBarElementOnClick(page as Pages, index);
								}}
							/>)
						})}
					</div>
				</div>
			</div>
		</nav>
	)
}

type NavBarElementProps = {
	label: string;
	path: string;
	active?: boolean;
	onClick?: () => void;
}

export function NavBarElement({ label, path, active, onClick }: NavBarElementProps) {

	return (
		<div className={`navbar__element__option ${active ? 'active' : ''}`} onClick={onClick}>
			<span>{label}</span>
		</div>
	)
}
