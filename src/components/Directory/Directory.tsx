import { Link, NavLink } from "react-router-dom";
import { headerRoutes } from "../../navigation/router";
import { StyleAttribute, css } from "glamor";
import { theme } from "../../styles/colourPalette";
import { FooterInPageDirectory } from "../FooterInPageDirectory/FooterInPageDirectory";
import React from "react";

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
					<React.Fragment key={routeMap[0]}>
						{((props.className === "footer-directory" &&
							routeMap[1].route.path !== "/randomise") ||
							props.className === "header-directory") && (
							<LinkComponent
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
						)}
						{routeMap[1].route.path === "/randomise" &&
							props.className === "footer-directory" && (
								<FooterInPageDirectory />
							)}
					</React.Fragment>
				);
			})}
		</div>
	);
};
