import React from 'react';
import * as S from './ProjectsSection.style';
import { PROJECT_CATEGORY_LIST, PROJECT_LIST } from '../../database';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { sendClickEvent } from '../../services';

const ProjectsSection = () => {
  const handleProjectCategoryItemLinkClick = ({ id, name }) => {
    sendClickEvent('CLICK_MEMBER_CARD', {
      id,
      name,
    });
  };

  return (
    <S.Section>
      <S.TopBackground id="projectsSection" />
      <S.BottomBackground />
      <S.SectionInner>
        <S.SectionTitle>프로젝트 소개</S.SectionTitle>
        <S.SectionNav>
          {PROJECT_CATEGORY_LIST.map(({ id, category, label }) => (
            <S.SectionNavItem key={id} href={`#${category}`}>
              <span>{label}</span>
            </S.SectionNavItem>
          ))}
        </S.SectionNav>

        <S.ProjectCategoryList>
          {PROJECT_CATEGORY_LIST.map(({ id, category, label }) => (
            <S.ProjectCategoryItem key={id} id={category}>
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <S.ProjectCategoryItemTitle>{label}</S.ProjectCategoryItemTitle>
              </AnimationOnScroll>

              <S.ProjectCardList>
                {PROJECT_LIST.filter((project) => project.category === category).map(
                  ({ id, name, summary, imageUrl }) => (
                    <S.ProjectCardItem key={id}>
                      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <S.ProjectCategoryItemLink
                          href={`/projects/${id}`}
                          onClick={() => handleProjectCategoryItemLinkClick({ id, name })}
                        >
                          <S.ProjectImageWrapper>
                            <S.ProjectImage src={imageUrl} className="projectCard__image" />
                          </S.ProjectImageWrapper>
                          <S.ProjectContentWrapper>
                            <S.ProjectName>{name}</S.ProjectName>
                            <S.ProjectSummary>{summary}</S.ProjectSummary>
                          </S.ProjectContentWrapper>
                        </S.ProjectCategoryItemLink>
                      </AnimationOnScroll>
                    </S.ProjectCardItem>
                  ),
                )}
              </S.ProjectCardList>
            </S.ProjectCategoryItem>
          ))}
        </S.ProjectCategoryList>
      </S.SectionInner>
    </S.Section>
  );
};

export default ProjectsSection;
