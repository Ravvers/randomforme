import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About/About";
import App from "../App";
import { RandomiseDirectory } from "../components/RandomiseDirectory/RandomiseDirectory";
import { Generate } from "../pages/Randomise/Generate/Generate";

type RouteMap = {
	navigationDisplayName: string;
	parentRoutePath?: string;
	route: RouteObject & { path: string };
};

const getRedirectRouteToHome = (path: string) => {
	return { path: path, element: <Navigate to="/randomise" /> };
};

export const inPageRoutes: Record<string, RouteMap> = {
	generate: {
		navigationDisplayName: "Generate",
		parentRoutePath: "/randomise/",
		route: {
			path: "generate",
			element: <Generate />
		}
	},
	group: {
		navigationDisplayName: "Group",
		parentRoutePath: "/randomise/",
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
			element: <RandomiseDirectory />,
			children: [
				inPageRoutes.generate.route,
				//uncomment when group is implemented
				// inPageRoutes.group.route,
				{
					index: true,
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
