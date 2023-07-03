import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../styles/colourPalette";
import { styled } from "@mui/material";
import { inPageRoutes } from "../../navigation/router";

export const RandomiseDirectory = () => {
	const [randomiseType, setRandomiseType] = React.useState("");
	const location = useLocation();

	React.useEffect(() => {
		const currentRoute = location.pathname.substring(
			location.pathname.lastIndexOf("/") + 1
		);
		if (currentRoute === "generate" || currentRoute === "group") {
			setRandomiseType(currentRoute);
		} else {
			setRandomiseType("generate");
		}
	}, [location.pathname]);

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
				{Object.values(inPageRoutes).map((routeMap) => {
					return (
						<ToggleButton
							key={routeMap.navigationDisplayName}
							value={routeMap.route.path}
						>
							{routeMap.navigationDisplayName}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
			<Outlet />
		</>
	);
};
