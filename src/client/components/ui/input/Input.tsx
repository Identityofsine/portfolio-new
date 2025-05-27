'use client';
import { useEffect, useState } from "react";
import './Input.scss';
import { InputFunction } from "./_types/InputFunction";
import { InputValidator } from "./_types/InputValidator";

type FxInputProps = {
	type?: "text" | "email" | "password";
	placeholder?: string;
	//acts as a default value
	value?: string;
	onChange?: InputFunction<string, void>;
	validator?: InputValidator;
};

function Input({
	type = "text",
	placeholder = "",
	value = "",
	onChange,
	validator,
}: FxInputProps) {

	const [inputValue, setInputValue] = useState(value);
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		if (value !== inputValue) {
			setInputValue(value);
		}
	}, [value]);

	useEffect(() => {
		onChange?.(inputValue);
	}, [inputValue]);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (validator) {
			const newValue = event.target.value;
			if (validator.validate(newValue)) {
				setInputValue(newValue);
				setIsValid(true);
			} else {
				switch (validator.behavior) {
					case 'setToEmpty':
						setInputValue('');
						break;
					case 'noChange':
						// Do nothing, deny the input
						break;
					case 'allowButThrowError':
						console.error("Input validation failed, but input is allowed.");
						setInputValue(newValue);
						break;
					case 'onlyAllowIfNull':
						if (inputValue === null) {
							setInputValue(newValue);
						}
						break;
				}
				setIsValid(false);
			}
		} else {
			const newValue = event.target.value;
			setInputValue(newValue);
			setIsValid(true);
		}
	}

	return (
		<div className={`fx-input-container ${isValid ? '' : 'invalid'}`}>
			<input
				className={`fx-input ${isValid ? '' : 'invalid'}`}
				type={type}
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInputChange}
			>
			</input>
		</div>
	);
}

export default Input;
