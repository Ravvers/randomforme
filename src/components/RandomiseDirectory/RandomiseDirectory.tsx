import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Outlet, useNavigate } from "react-router-dom";
import { theme } from "../../styles/colourPalette";
import { styled } from "@mui/material";
// import { css } from "glamor";

export const RandomiseDirectory = () => {
	const [randomiseType, setRandomiseType] = React.useState("generate");

	const navigate = useNavigate();

	const handleChange = (
		_event: React.MouseEvent<HTMLElement>,
		newRandomiseType: string
	) => {
		if (newRandomiseType !== null) {
			navigate(newRandomiseType);
			setRandomiseType(newRandomiseType);
		}
	};

	const ToggleButton = styled(MuiToggleButton)({
		"&.MuiToggleButton-root": {
			color: theme.global.text,
			fontFamily: "Abel, sans-serif",
			fontSize: "1.1em"
		},
		"&.Mui-selected": {
			backgroundColor: "rgb(55 54 52)"
		},
		"&.Mui-selected, &.Mui-selected:hover": {
			color: theme.body.button.active
		}
	});

	return (
		<>
			<ToggleButtonGroup
				color="primary"
				value={randomiseType}
				exclusive
				onChange={handleChange}
				aria-label="Randomise Type"
				sx={{ backgroundColor: theme.body.button.background }}
			>
				<ToggleButton value="generate">Generate</ToggleButton>

				<ToggleButton value="group">Group</ToggleButton>
			</ToggleButtonGroup>
			<Outlet />
		</>
	);
};
