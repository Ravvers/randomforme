import "@testing-library/jest-dom/extend-expect";
import { generateRandomIntegers } from "./randomise";
describe("randomise", () => {
	describe("generateRandomIntegers", () => {
		test("Generates a single integer when quantity isn't provided", () => {
			const rangeMin = 1;
			const rangeMax = 100;

			const integerGenerated = generateRandomIntegers({
				range: { min: rangeMin, max: rangeMax }
			});

			expect(integerGenerated.length).toBe(1);
			expect(integerGenerated[0]).toBeGreaterThanOrEqual(rangeMin);
			expect(integerGenerated[0]).toBeLessThanOrEqual(rangeMax);
		});
		test("Generates 1000 integers when quantity is 1000", () => {
			const rangeMin = 1;
			const rangeMax = 100;
			const quantity = 1000;

			const integerGenerated = generateRandomIntegers({
				range: { min: rangeMin, max: rangeMax },
				quantity: quantity
			});

			expect(integerGenerated.length).toBe(quantity);
			expect(integerGenerated[0]).toBeGreaterThanOrEqual(rangeMin);
			expect(integerGenerated[0]).toBeLessThanOrEqual(rangeMax);
		});
	});
});
