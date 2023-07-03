import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { theme } from "./styles/colourPalette";
import { Header } from "./components/Header/Header";
import { PageContent } from "./components/PageContent/PageContent";

function App() {
	return (
		<div
			style={{
				background: theme.global.background,
				color: theme.global.text,
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				paddingTop: "15px"
			}}
		>
			<Header />
			<PageContent>
				<Outlet />
			</PageContent>
			<Footer />
		</div>
	);
}

export default App;
