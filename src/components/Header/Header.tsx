import { theme } from "../../styles/colourPalette";
import { css } from "glamor";
import { Directory } from "../Directory/Directory";

const linkStyles = css({
	marginRight: 30,
	":hover": {
		color: theme.global.accent,
		transition: "0.5s"
	}
});

export const Header = () => {
	return (
		<div id="header">
			<div
				style={{
					width: "30%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center"
				}}
			>
				<img
					src="/logo.svg"
					alt="logo"
					style={{
						maxHeight: "42px",
						maxWidth: "42px",
						marginLeft: "30px"
					}}
				/>
			</div>
			<div style={{ width: "40%", alignItems: "center" }}>
				<h1 style={{ margin: 0 }}>Random For Me</h1>
			</div>

			<Directory className="header-directory" linkStyle={linkStyles} />
		</div>
	);
};
