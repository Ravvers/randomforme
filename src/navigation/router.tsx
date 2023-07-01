import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About/About";
import App from "../App";
import { InPageDirectory } from "../components/InPageDirectory/InPageDirectory";

type RouteMapHeader = {
	navigationDisplayName: string;
	section: "Header";
	route: RouteObject & { path: string };
};

type RouteMapInPage = {
	navigationDisplayName: string;
	section: "In Page";
	parentPage: keyof { [k: string]: RouteMapHeader };
	route: RouteObject & { path: string };
};

export const inPageRoutes: Record<string, RouteMapInPage> = {
	generate: {
		navigationDisplayName: "Generate",
		section: "In Page",
		parentPage: "Randomise",
		route: {
			path: "/generate",
			element: <About />
		}
	},
	group: {
		navigationDisplayName: "Group",
		section: "In Page",
		parentPage: "Randomise",
		route: {
			path: "/group",
			element: <About />
		}
	}
};

export const headerRoutes: Record<string, RouteMapHeader> = {
	directory: {
		navigationDisplayName: "Randomise",
		section: "Header",
		route: {
			path: "/",
			element: <InPageDirectory />,
			children: [inPageRoutes.generate.route, inPageRoutes.group.route]
		}
	},
	about: {
		navigationDisplayName: "About",
		section: "Header",
		route: {
			path: "/about",
			element: <About />
		}
	}
};

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [headerRoutes.directory.route, headerRoutes.about.route]
	},
	{ path: "*", element: <Navigate to="/" replace /> }
]);
