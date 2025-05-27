
export enum ValidatorBehavior {
	SET_TO_EMPTY = 'setToEmpty',
	NO_CHANGE = 'noChange', // denies the input
	ALLOW_BUT_THROW_ERROR = 'allowButThrowError', // allows the input but throws an error
	ONLY_ALLOW_IF_NULL = 'onlyAllowIfNull', // allows the input only if it is null
}

export interface InputValidator {
	behavior: ValidatorBehavior;
	validate(input: string): boolean;
}
