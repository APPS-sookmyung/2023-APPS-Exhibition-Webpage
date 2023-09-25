import styled from "@emotion/styled";

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;
