import styled from '@emotion/styled';
import { Colors } from '../../theme';
import { BREAKPOINTS } from '../../styles';

export const Section = styled.section`
  position: relative;
  padding: 200px 0;
`;

export const Background = styled.div`
  display: block;
  position: absolute;
  opacity: 0.3;
  width: 100%;
  height: 500px;
  background-position: top 50% left 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TopBackground = styled(Background)`
  top: 0;
  background-image: linear-gradient(
      to bottom,
      rgba(13, 13, 13, 1) 0%,
      rgba(13, 13, 13, 0.5) 10%,
      rgba(13, 13, 13, 0) 30%,
      rgba(13, 13, 13, 0) 70%,
      rgba(13, 13, 13, 0.5) 80%,
      rgba(13, 13, 13, 1) 100%
    ),
    url('/images/home/img-projects-section-top-background.png');
  background-size: cover;
`;

export const BottomBackground = styled(Background)`
  bottom: 0;
  background-image: linear-gradient(
      to bottom,
      rgba(13, 13, 13, 1) 0%,
      rgba(13, 13, 13, 0.2) 40%,
      rgba(13, 13, 13, 0) 70%,
      rgba(13, 13, 13, 0) 80%,
      rgba(13, 13, 13, 0) 100%
    ),
    url('/images/home/img-projects-section-bottom-background.png');
`;

export const SectionInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
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

export const SectionNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 40px;
  margin-bottom: 120px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 32px;
    margin-bottom: 80px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    margin-bottom: 40px;
  }
`;

export const SectionNavItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 40px;
  border-radius: 20px;
  background-color: #ffffff;
  opacity: 0.7; /* 버튼의 기본 투명도 설정 */
  transition: opacity 0.3s; /* 마우스 호버 시 투명도 전환을 부드럽게 만듭니다. */

  & > span {
    color: #333d4b;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  /* 마우스 호버 시 투명도 조절 */
  &:hover {
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 26px;
    padding: 12px 36px;

    & > span {
      font-size: 20px;
    }
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 18px;
    padding: 8px 10px;

    & > span {
      font-size: 16px;
    }
  }
`;

export const ProjectCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 96px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 60px;
  }
`;

export const ProjectCategoryItem = styled.li`
  scroll-margin-top: 80px;
`;

export const ProjectCategoryItemTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  color: ${Colors.white};
  white-space: pre-wrap;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-bottom: 18px;
    font-size: 42px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 14px;
    font-size: 28px;
  }
`;

export const ProjectCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 26px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
  }
`;

export const ProjectCardItem = styled.li`
  width: 100%;

  &:hover {
    & .projectCard__image {
      transform: scale(1.1);
      transition: transform 0.2s ease;
    }
  }
`;

export const ProjectCategoryItemLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #fff;
  overflow: hidden;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #140b24;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 14px;
  }
`;

export const ProjectName = styled.h4`
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
    margin-bottom: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

export const ProjectSummary = styled.p`
  font-size: 18px;
  line-height: 1.3;
  color: ${Colors.lightGrey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;
