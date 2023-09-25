import * as S from "./PageLayout.style";

const PageLayout = ({ backgroundColor = `#ffffff`, className, children }) => {
	return (
		<S.Layout className={className} backgroundColor={backgroundColor}>
			{children}
		</S.Layout>
	);
};

export default PageLayout;
