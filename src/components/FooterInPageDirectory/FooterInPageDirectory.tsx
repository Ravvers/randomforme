import { Link } from "react-router-dom";
import { inPageRoutes } from "../../navigation/router";
import { css } from "glamor";
import { theme } from "../../styles/colourPalette";

export const FooterInPageDirectory = () => {
	return (
		<div
			className="footer-in-page-routes"
			role="navigation"
			aria-label="Footer in page routes"
		>
			{Object.entries(inPageRoutes).map((routeMap) => {
				return (
					<Link
						key={routeMap[0]}
						{...{
							...css({
								".active": {
									color: theme.global.accent
								}
							})
						}}
						to={
							routeMap[1].parentRoutePath + routeMap[1].route.path
						}
					>
						{routeMap[1].navigationDisplayName}
					</Link>
				);
			})}
		</div>
	);
};
