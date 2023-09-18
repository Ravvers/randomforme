import { Button, TextField } from "@mui/material";
import { PageContent } from "../../../components/PageContent/PageContent";
import { ChangeEvent, useState } from "react";
import { generateRandomIntegers } from "../../../randomise/randomise";
import { ValidationError, ok } from "../../../Common/Errors";

export const Generate = () => {
	function generateNumbersAndDisplay(): void {
		const generatedNumbers: number[] | ValidationError =
			generateRandomIntegers({
				quantity: quantity,
				range: { min: minimum, max: maximum }
			});
		if (ok(generatedNumbers)) {
			setGeneratedNumbers(generatedNumbers);
		}
	}

	function handleInputChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) {
		const target = e.target as HTMLInputElement;
		const value = target.value;

		if (name === "quantity") {
			setQuantity(parseInt(value));
		} else if (name === "minimum") {
			setMinimum(parseInt(value));
		} else if (name === "maximum") {
			setMaximum(parseInt(value));
		}
	}

	const [quantity, setQuantity] = useState<number>(1);
	const [minimum, setMinimum] = useState<number>(1);
	const [maximum, setMaximum] = useState<number>(100);

	const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);

	return (
		<PageContent>
			<TextField
				id="outlined-basic"
				label="Quantity"
				variant="outlined"
				type="number"
				value={quantity}
				onChange={(e) => handleInputChange(e, "quantity")}
			/>
			<div style={{ marginBottom: 20 }} />
			<TextField
				id="outlined-basic"
				label="Minimum (inclusive)"
				variant="outlined"
				type="number"
				value={minimum}
				onChange={(e) => handleInputChange(e, "minimum")}
				style={{ marginRight: 20 }}
			/>
			<TextField
				id="outlined-basic"
				label="Maximum (inclusive)"
				variant="outlined"
				type="number"
				value={maximum}
				onChange={(e) => handleInputChange(e, "maximum")}
			/>
			<div style={{ marginBottom: 20 }} />
			<Button
				variant="contained"
				onClick={() => generateNumbersAndDisplay()}
			>
				Generate
			</Button>
			<div style={{ marginBottom: 20 }} />
			<div>{generatedNumbers.join(", ")}</div>
		</PageContent>
	);
};
