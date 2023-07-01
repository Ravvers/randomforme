import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

export const InPageDirectory = () => {
	const [alignment, setAlignment] = React.useState("generate");

	const handleChange = (
		_event: React.MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setAlignment(newAlignment);
	};

	return (
		<ToggleButtonGroup
			color="primary"
			value={alignment}
			exclusive
			onChange={handleChange}
			aria-label="Platform"
		>
			<ToggleButton value="generate">
				<Link key={"generate"} to={"/generate"}>
					Generate
				</Link>
			</ToggleButton>

			<ToggleButton value="group">
				<Link key={"group"} to={"/group"}>
					Group
				</Link>
			</ToggleButton>
		</ToggleButtonGroup>
	);
};
