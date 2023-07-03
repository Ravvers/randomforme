import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import "@testing-library/jest-dom/extend-expect";

const renderApp = () => {
	render(<RouterProvider router={router} />);
};

describe("App", () => {
	test("header and footer renders", () => {
		renderApp();
		const headerNavigation = screen.getByRole("navigation", {
			name: "header-directory"
		});

		const footerNavigation = screen.getByRole("navigation", {
			name: "footer-directory"
		});

		expect(headerNavigation).toBeVisible();
		expect(footerNavigation).toBeVisible();
	});
});
