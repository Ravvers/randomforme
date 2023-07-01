import { Link, NavLink } from "react-router-dom";
import { headerRoutes } from "../../navigation/router";
import { StyleAttribute, css } from "glamor";
import { theme } from "../../styles/colourPalette";

type DirectoryProps = {
	linkStyle?: StyleAttribute;
	className?: string;
};

export const Directory = (props: DirectoryProps) => {
	const LinkComponent =
		props.className === "header-directory" ? NavLink : Link;
	return (
		<div
			className={props.className}
			role="navigation"
			aria-label={props.className}
		>
			{Object.entries(headerRoutes).map((routeMap) => {
				return (
					<LinkComponent
						key={routeMap[0]}
						{...{
							...props.linkStyle,
							...css({
								".active": {
									color: theme.global.accent
								}
							})
						}}
						to={routeMap[1].route.path}
					>
						{routeMap[1].navigationDisplayName}
					</LinkComponent>
				);
			})}
		</div>
	);
};
