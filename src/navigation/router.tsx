import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About/About";
import App from "../App";
import { InPageDirectory } from "../components/InPageDirectory/InPageDirectory";

type RouteMap = {
	navigationDisplayName: string;
	route: RouteObject & { path: string };
};

const getRedirectRouteToHome = (path: string) => {
	return { path: path, element: <Navigate to="/randomise" replace /> };
};

export const inPageRoutes: Record<string, RouteMap> = {
	generate: {
		navigationDisplayName: "Generate",
		route: {
			path: "generate",
			element: <h1>Generate</h1>
		}
	},
	group: {
		navigationDisplayName: "Group",
		route: {
			path: "group",
			element: <h1>Group</h1>
		}
	}
};

export const headerRoutes: Record<string, RouteMap> = {
	directory: {
		navigationDisplayName: "Randomise",
		route: {
			path: "/randomise",
			element: <InPageDirectory />,
			children: [
				inPageRoutes.generate.route,
				inPageRoutes.group.route,
				{
					path: "",
					element: inPageRoutes.generate.route.element
				}
			]
		}
	},
	about: {
		navigationDisplayName: "About",
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
		children: [
			headerRoutes.about.route,
			headerRoutes.directory.route,
			getRedirectRouteToHome(""),
			getRedirectRouteToHome("*")
		]
	},
	getRedirectRouteToHome("*")
]);
