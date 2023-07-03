import { Link } from "react-router-dom";
import { inPageRoutes } from "../../navigation/router";
import { StyleAttribute, css } from "glamor";
import { theme } from "../../styles/colourPalette";

type DirectoryProps = {
	linkStyle?: StyleAttribute;
	className?: string;
};

export const FooterDirectory = (props: DirectoryProps) => {
	return (
		<div
			className={props.className}
			role="navigation"
			aria-label={props.className}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "center"
			}}
		>
			{Object.entries(inPageRoutes).map((routeMap) => {
				return (
					<Link
						key={routeMap[0]}
						{...{
							...props.linkStyle,
							...css({
								".active": {
									color: theme.global.accent
								}
							})
						}}
						to={"/randomise/" + routeMap[1].route.path}
					>
						{routeMap[1].navigationDisplayName}
					</Link>
				);
			})}
		</div>
	);
};
