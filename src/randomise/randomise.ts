import { Chance } from "chance";

const chance = new Chance();

type RandomiseOptions = {
	range: { min: number; max: number };
	quantity?: number;
};

/**
 * Generates a random integer between the range provided (inclusive).
 * Quantity of numbers can be specified to generate more than one number in a single call. (Default is 1)
 */
export function generateRandomIntegers(options: RandomiseOptions) {
	return Array.from({ length: options.quantity ?? 1 }, () =>
		chance.integer({ min: options.range.min, max: options.range.max })
	);
}
