export const CopyrightNotice = () => {
	const currentYear = new Date().getFullYear();
	return (
		<p id="footer-copyright">
			© paperguin {currentYear}. All rights reserved.
		</p>
	);
};
