import styled from '@emotion/styled';
import { Colors } from '../../theme';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const SectionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/home/img-home-main-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 50% left 50%;
`;

export const MainSectionInner = styled(SectionInner)`
  justify-content: center;
  height: 100%;

  & > h1,
  & > h2 {
    font-family: 'Ubuntu';
  }
`;

export const MainSectionTitle = styled.h1`
  font-size: 92px;
  font-weight: 800;
  text-align: center;
  line-height: normal;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 68px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 40px;
  }
`;

export const MainSectionSubTitle = styled.h2`
  font-size: 38px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const MessageSection = styled.section`
  background: linear-gradient(
    180deg,
    ${Colors.purple} 0%,
    #260b4a 33.33%,
    #120523 66.67%,
    #0d0d0d 100%
  );

  padding: 200px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 160px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 80px 0;
  }
`;

export const MessageSectionInner = styled(SectionInner)`
  height: 100%;
  justify-content: center;
  gap: 40px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 52px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  color: ${Colors.white};
  white-space: pre-wrap;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-bottom: 18px;
    font-size: 48px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 14px;
    font-size: 32px;
  }
`;

export const SectionSubTitle = styled.h3`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: ${Colors.white};
  line-height: 1.3;
  white-space: pre-wrap;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  color: ${Colors.grey};

  & > strong {
    color: ${Colors.lightPurple};
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 24px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
  }
`;

export const AboutAppsSection = styled.section`
  margin: 200px 0;
  background: ${Colors.black};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin: 160px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin: 80px 0;
  }
`;

export const AboutAppsSectionInner = styled(SectionInner)`
  height: 100%;
  justify-content: center;
  gap: 40px;
`;

export const MemberSection = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 0 20px;
  margin: 40px 0;
  background: ${Colors.black};
`;

export const MemberCardSection = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-top: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 20px;
  }
`;
