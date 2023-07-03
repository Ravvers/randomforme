import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { theme } from "./styles/colourPalette";
import { Header } from "./components/Header/Header";
import { PageContent } from "./components/PageContent/PageContent";

function App() {
	return (
		<div
			id="app"
			style={{
				background: theme.global.background,
				color: theme.global.text
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
