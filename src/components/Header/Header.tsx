import { theme } from "../../styles/colourPalette";
import { css } from "glamor";
import { Directory } from "../Directory/Directory";
import { Link } from "react-router-dom";

const linkStyles = css({
	":hover": {
		color: theme.global.accent,
		transition: "0.5s"
	}
});

export const Header = () => {
	return (
		<div id="header">
			<div id="logo-container">
				<Link to={"randomise"}>
					<img id="logo" src="/logo.svg" alt="logo" />
				</Link>
			</div>
			<div id="title-container">
				<Link to={"randomise"}>
					<h1 className="title">Random For Me</h1>
				</Link>
			</div>

			<Directory className="header-directory" linkStyle={linkStyles} />
		</div>
	);
};
