import {
	ValidationError,
	ValidationErrorGenerator,
	ValidationErrorMessages,
	ok
} from "../Common/Errors";

function validateIsNumber(
	input: unknown,
	context: string
): number | ValidationError {
	if (input === "") {
		return ValidationErrorGenerator.newError(
			ValidationErrorMessages.VLD_NUMBER_IS_NOT_NUMBER,
			context
		);
	}
	const inputAsNumber = Number(input);
	if (isNaN(inputAsNumber)) {
		return ValidationErrorGenerator.newError(
			ValidationErrorMessages.VLD_NUMBER_IS_NOT_NUMBER,
			context
		);
	}
	return inputAsNumber;
}

export function validateQuantity(input: unknown): number | ValidationError {
	const validatedNumber = validateIsNumber(input, "quantity");

	if (!ok(validatedNumber)) {
		return validatedNumber;
	}

	if (validatedNumber < 1) {
		return ValidationErrorGenerator.newError(
			ValidationErrorMessages.VLD_QUANTITY_GREATER_THAN_ZERO,
			"quantity"
		);
	}

	if (validatedNumber > 99999) {
		return ValidationErrorGenerator.newError(
			ValidationErrorMessages.VLD_QUANTITY_LESS_THAN_99999,
			"quantity"
		);
	}
	return validatedNumber;
}

export function validateRangeNumbers(input: {
	min: unknown;
	max: unknown;
}): { min: number; max: number } | ValidationError {
	const validatedMin = validateIsNumber(input.min, "minimum");
	const validatedMax = validateIsNumber(input.max, "maximum");
	if (!ok(validatedMin)) {
		return validatedMin;
	}
	if (!ok(validatedMax)) {
		return validatedMax;
	}
	if (validatedMin > validatedMax) {
		return ValidationErrorGenerator.newError(
			ValidationErrorMessages.VLD_MINIMUM_LESS_THAN_OR_EQUAL_TO_MAXIMUM,
			"minimum, maximum"
		);
	}

	return { min: validatedMin, max: validatedMax };
}
