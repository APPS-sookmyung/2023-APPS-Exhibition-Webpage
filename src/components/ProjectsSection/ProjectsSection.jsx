import React from 'react';
import * as S from './ProjectsSection.style';
import { PROJECT_CATEGORY_LIST } from '../../database/projectList';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ProjectsSection = () => {
  return (
    <S.Section>
      <S.TopBackground id="projectsSection" />
      <S.BottomBackground />
      <S.SectionInner>
        <S.SectionTitle>프로젝트 소개</S.SectionTitle>
        <S.SectionNav>
          {PROJECT_CATEGORY_LIST.map(({ id, title }) => (
            <S.SectionNavItem key={id} href={`#${id}`}>
              <span>{title}</span>
            </S.SectionNavItem>
          ))}
        </S.SectionNav>

        {PROJECT_CATEGORY_LIST.length > 0 && (
          <S.ProjectCategoryList>
            {PROJECT_CATEGORY_LIST.map(({ id, title, projectList }) => (
              <S.ProjectCategoryItem key={id} id={id}>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                  <S.ProjectCategoryItemTitle>{title}</S.ProjectCategoryItemTitle>
                </AnimationOnScroll>
                {projectList.length > 0 && (
                  <S.ProjectCardList>
                    {projectList.map(({ id, name, projectSummary, imageUrl }) => (
                      <S.ProjectCardItem key={id}>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                          <S.ProjectCategoryItemLink href={`/projects/${id}`}>
                            <S.ProjectImageWrapper>
                              <S.ProjectImage src={imageUrl} />
                            </S.ProjectImageWrapper>
                            <S.ProjectContentWrapper>
                              <S.ProjectName>{name}</S.ProjectName>
                              <S.ProjectSummary>{projectSummary}</S.ProjectSummary>
                            </S.ProjectContentWrapper>
                          </S.ProjectCategoryItemLink>
                        </AnimationOnScroll>
                      </S.ProjectCardItem>
                    ))}
                  </S.ProjectCardList>
                )}
              </S.ProjectCategoryItem>
            ))}
          </S.ProjectCategoryList>
        )}
      </S.SectionInner>
    </S.Section>
  );
};

export default ProjectsSection;
