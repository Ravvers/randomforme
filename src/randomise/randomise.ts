import { Chance } from "chance";
import { validateQuantity, validateRangeNumbers } from "./validateInput";
import { ValidationError, ok } from "../Common/Errors";

const chance = new Chance();

type RandomiseOptions = {
	range: { min: number; max: number };
	quantity: number;
};

/**
 * Generates a random integer between the range provided (inclusive).
 * Quantity of numbers can be specified to generate more than one number in a single call. (Default is 1)
 */
export function generateRandomIntegers(
	options: RandomiseOptions
): number[] | ValidationError {
	const validatedQuantity = validateQuantity(options.quantity);
	if (!ok(validatedQuantity)) {
		return validatedQuantity;
	}
	const validatedRangeNumbers = validateRangeNumbers(options.range);
	if (!ok(validatedRangeNumbers)) {
		return validatedRangeNumbers;
	}
	return Array.from({ length: validatedQuantity }, () =>
		chance.integer({
			min: validatedRangeNumbers.min,
			max: validatedRangeNumbers.max
		})
	);
}
