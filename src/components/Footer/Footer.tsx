import { theme } from "../../styles/colourPalette";
import { CopyrightNotice } from "../CopyrightNotice/CopyrightNotice";
import { Directory } from "../Directory/Directory";

export const Footer = () => {
	return (
		<div
			id="footer"
			style={{
				backgroundColor: theme.footer.background
			}}
		>
			<Directory className="footer-directory" />
			<CopyrightNotice />
		</div>
	);
};
