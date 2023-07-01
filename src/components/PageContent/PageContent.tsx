export const PageContent = (props: {
	children: JSX.Element | JSX.Element[];
}) => {
	return <div className="page-content">{props.children}</div>;
};
