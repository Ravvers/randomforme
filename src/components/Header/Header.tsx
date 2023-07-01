import { theme } from "../../styles/colourPalette";
import { css } from "glamor";
import { Directory } from "../Directory/Directory";

const linkStyles = css({
	":hover": {
		color: theme.global.accent,
		transition: "0.5s"
	}
});

export const Header = () => {
	return (
		<div id="header">
			<Directory className="header-directory" linkStyle={linkStyles} />
		</div>
	);
};
