import { Button, TextField } from "@mui/material";
import { PageContent } from "../../../components/PageContent/PageContent";
import { ChangeEvent, useState } from "react";
import { generateRandomIntegers } from "../../../randomise/randomise";
import { ValidationError, ok } from "../../../Common/Errors";
import { theme } from "../../../styles/colourPalette";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Generate = () => {
	function generateNumbersAndDisplay(): void {
		const generatedNumbers: number[] | ValidationError =
			generateRandomIntegers({
				quantity: quantity,
				range: { min: minimum, max: maximum }
			});
		if (ok(generatedNumbers)) {
			setGeneratedNumbers(generatedNumbers);
		} else {
			if (generatedNumbers.context?.includes("quantity")) {
				setQuantityErrorMessage(generatedNumbers.message);
			}
			if (generatedNumbers.context?.includes("minimum")) {
				setMinimumErrorMessage(generatedNumbers.message);
			}
			if (generatedNumbers.context?.includes("maximum")) {
				setMaximumErrorMessage(generatedNumbers.message);
			}
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
			setQuantityErrorMessage("");
		} else if (name === "minimum") {
			setMinimum(parseInt(value));
			setMinimumErrorMessage("");
		} else if (name === "maximum") {
			setMaximum(parseInt(value));
			setMaximumErrorMessage("");
		}
	}

	const [quantity, setQuantity] = useState<number>(1);
	const [minimum, setMinimum] = useState<number>(1);
	const [maximum, setMaximum] = useState<number>(100);
	const [quantityErrorMessage, setQuantityErrorMessage] =
		useState<string>("");
	const [minimumErrorMessage, setMinimumErrorMessage] = useState<string>("");
	const [maximumErrorMessage, setMaximumErrorMessage] = useState<string>("");

	const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);

	return (
		<PageContent>
			<div
				style={{
					backgroundColor: theme.body.elementsBackground,
					padding: "2em",
					borderRadius: "1em"
				}}
			>
				<TextField
					id="outlined-basic"
					label="Quantity"
					variant="outlined"
					type="number"
					value={quantity}
					onChange={(e) => handleInputChange(e, "quantity")}
					helperText={quantityErrorMessage}
					error={quantityErrorMessage !== ""}
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
					helperText={minimumErrorMessage}
					error={minimumErrorMessage !== ""}
				/>
				<TextField
					id="outlined-basic"
					label="Maximum (inclusive)"
					variant="outlined"
					type="number"
					value={maximum}
					onChange={(e) => handleInputChange(e, "maximum")}
					helperText={maximumErrorMessage}
					error={maximumErrorMessage !== ""}
				/>
				<div style={{ marginBottom: 20 }} />
				<Button
					variant="contained"
					onClick={() => generateNumbersAndDisplay()}
				>
					Generate
				</Button>
			</div>

			<div style={{ paddingBottom: 20 }} />
			<>
				{generatedNumbers.length > 0 && (
					<div
						style={{
							backgroundColor: theme.body.elementsBackground,
							padding: "2em",
							borderRadius: "1em"
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end"
							}}
						>
							<CopyToClipboard text={generatedNumbers.join(", ")}>
								<span>
									<ContentCopyIcon />
								</span>
							</CopyToClipboard>
						</div>

						<div>{generatedNumbers.join(", ")}</div>
					</div>
				)}
			</>
		</PageContent>
	);
};
