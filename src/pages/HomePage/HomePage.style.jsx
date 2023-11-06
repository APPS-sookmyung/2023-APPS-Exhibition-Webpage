import styled from '@emotion/styled';
import { Colors } from '../../theme';

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
  background-image: url('/images/home/img-home-main-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 50% left 50%;
`;

export const MainSectionInner = styled(SectionInner)`
  justify-content: center;
  height: 100%;
`;

export const MainSectionTitle = styled.h1`
  font-size: 100px;
  font-weight: 900;
  text-align: center;
  line-height: normal;
  color: ${Colors.white};
`;

export const MainSectionSubTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: normal;
  color: ${Colors.white};
`;

export const MessageSection = styled.section`
  height: 716px;
  background: linear-gradient(180deg, #351068 0%, #260b4a 33.33%, #120523 66.67%, #0d0d0d 100%);
`;

export const MessageSectionInner = styled(SectionInner)`
  height: 100%;
  justify-content: center;
  gap: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  color: ${Colors.white};
  white-space: pre-wrap;
`;

export const SectionSubTitle = styled.h3`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: ${Colors.white};
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const SectionDescription = styled.p`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${Colors.grey};
`;

export const AboutAppsSection = styled.section`
  height: 716px;
  background: ${Colors.black};
`;

export const AboutAppsSectionInner = styled(SectionInner)`
  height: 100%;
  justify-content: center;
  gap: 40px;
`;

export const MemberSection = styled.section`
  height: 1000px;
  background: ${Colors.black};
  width: 100%;
  position: relative;
`;

export const MemberCardSection = styled.div`
  width: 100%;
`;
