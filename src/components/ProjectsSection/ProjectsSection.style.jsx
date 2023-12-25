import styled from '@emotion/styled';

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
  margin-bottom: 80px;
  color: #ffffff;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
`;

export const SectionNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* gap: 60px; */
  margin-bottom: 150px;
`;

export const SectionNavItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 50px;
  padding: 14px;
  border-radius: 20px;
  background-color: #ffffff;
  opacity: 0.7; /* 버튼의 기본 투명도 설정 */
  transition: opacity 0.3s; /* 마우스 호버 시 투명도 전환을 부드럽게 만듭니다. */

  & > span {
    color: #333d4b;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }

  /* 마우스 호버 시 투명도 조절 */
  &:hover {
    opacity: 1;
  }
`;

export const ProjectCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const ProjectCategoryItem = styled.li`
  scroll-margin-top: 80px;
`;

export const ProjectCategoryItemTitle = styled.h3`
  margin-bottom: 50px;
  color: #ffffff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;

export const ProjectCardList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const ProjectCardItem = styled.li`
  width: calc(50% - 15px);

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
  width: 480px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #fff;
  overflow: hidden;
  /* justify-content: space-between; */
  /* position: relative; */
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  /* height: 296px; */
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  top: auto;
  width: 100%;
  height: 270px;
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 22px;
`;

export const ProjectName = styled.h4`
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ProjectSummary = styled.p`
  color: #ffffff;
`;
