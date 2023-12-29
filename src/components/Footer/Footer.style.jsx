import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../styles';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 40px 0;
  background-color: #191f28;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 28px;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoTitle = styled.h3`
  color: #b0b8c1;
  font-size: 16px;
  font-weight: 700;
`;

export const InfoContentList = styled.ul`
  display: flex;

  @media (max-width: ${BREAKPOINTS[1]}px) {
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
  }
`;

export const InfoContentItem = styled.li`
  &:not(:last-of-type) {
    &::after {
      content: '|';
      color: #6b7684;
      margin: 0 4px;
    }
  }
`;

export const Content = styled.span`
  color: #6b7684;
  font-size: 16px;
`;

export const InfoContent = styled(Content)``;

export const Copyright = styled(Content)`
  font-weight: bold;
`;
