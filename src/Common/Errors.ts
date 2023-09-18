import {
	ErrorMessages,
	CustomErrorGenerator,
	getIsOkFunction
} from "@paperguin/utilities";

export const ValidationErrorMessages: ErrorMessages = {
	VLD_MINIMUM_LESS_THAN_OR_EQUAL_TO_MAXIMUM:
		"Minimum must be less than or equal to maximum",
	VLD_QUANTITY_GREATER_THAN_ZERO: "Quantity must be greater than 0",
	VLD_QUANTITY_LESS_THAN_99999: "Quantity must be less than 99999",
	VLD_NUMBER_IS_NOT_NUMBER: "Please enter a number"
};

export const ValidationErrorGenerator = new CustomErrorGenerator(
	"ValidationError",
	ValidationErrorMessages
);

export type ValidationError = ReturnType<
	typeof ValidationErrorGenerator.newError
>;

export type ApplicationErrors = ValidationError;

export const ok = getIsOkFunction([ValidationErrorGenerator]);
