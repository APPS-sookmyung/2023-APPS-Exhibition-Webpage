import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  padding: 165px 0 400px;
`;

export const Background = styled.div`
  display: block;
  position: absolute;
  opacity: 0.2;
  width: 100%;
  height: 500px;
  background-position: top 50% left 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TopBackground = styled(Background)`
  top: 0;
  background-image: url('/images/home/img-projects-section-top-background.png');
`;

export const BottomBackground = styled(Background)`
  bottom: 0;
  background-image: url('/images/home/img-projects-section-bottom-background.png');
`;

export const SectionInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 60px;
  color: #ffffff;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
`;

export const SectionNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 60px;
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
  border-radius: 50px;
  background-color: #ffffff;

  & > span {
    color: #333d4b;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
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
  margin-bottom: 40px;
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
`;

export const ProjectCategoryItemLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 290px;
  padding: 32px 40px;
  background: linear-gradient(118deg, #351068 0%, #180038 100%);
  border-radius: 20px;
`;

export const ProjectName = styled.h4`
  z-index: 1;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
`;

export const ProjectMemberList = styled.ul`
  display: flex;
  z-index: 1;
`;

export const ProjectMemberItem = styled.li`
  color: #ffffff;
  font-size: 18px;
  /* font-weight: 700; */

  &:not(:last-of-type) {
    &::after {
      content: '|';
      margin: 0 6px;
    }
  }
`;

export const ProjectImage = styled.img`
  position: absolute;
  right: 30px;
  bottom: 70px;
  height: 150px;
  z-index: 0;
`;
