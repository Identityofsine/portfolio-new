'use client';
import { useState } from 'react';
import './ToggleButton.scss';

type ToggleButtonProps = {
	initalValue?: boolean;
	className?: string;
	onToggle?: (value: boolean) => void;
	children?: React.ReactNode;
}

function ToggleButton({ initalValue, className, onToggle, children }: ToggleButtonProps) {
	const [isActive, setIsActive] = useState(initalValue || false);

	const handleToggle = () => {
		const newValue = !isActive;
		setIsActive(newValue);
		onToggle?.(newValue);
	}

	return (
		<div className={`toggle-button ${isActive ? 'active' : ''} ${className}`} onClick={handleToggle}>
			{children}
		</div>
	)
}

export default ToggleButton
