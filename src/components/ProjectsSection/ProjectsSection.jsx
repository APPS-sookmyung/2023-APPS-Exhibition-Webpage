import React from 'react';
import * as S from './ProjectsSection.style';

const PROJECT_CATEGORY_LIST = [
  {
    id: 'app',
    title: '앱 서비스',
    projectList: [
      {
        id: 1,
        name: 'Cookiee-',
        memberNameList: ['경민서', '윤서희', '조영서', '황수연'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 2,
        name: 'Pochak',
        memberNameList: ['김다연', '오지수', '하고은', '황수연'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 3,
        name: 'CalenTime',
        memberNameList: ['김수현', '신진영', '하고은'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 4,
        name: 'APPS Check',
        memberNameList: ['류미성', '신진영', '이채은'],
        imageUrl: '/images/projects/img-project-1.png',
      },
    ],
  },
  {
    id: 'web',
    title: '웹 서비스',
    projectList: [
      {
        id: 5,
        name: '새미새',
        memberNameList: ['김진영', '문채일', '정민주', '최민선'],
        imageUrl: '/images/projects/img-project-1.png',
      },
    ],
  },
  {
    id: 'new-members',
    title: '신입부원 10기',
    projectList: [
      {
        id: 6,
        name: 'SMSW Web',
        memberNameList: ['경민서'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 7,
        name: 'DevInsight',
        memberNameList: ['류미성'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 8,
        name: 'Diary',
        memberNameList: ['윤현서'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 9,
        name: 'Basket',
        memberNameList: ['이지은'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 10,
        name: 'Cookcipe',
        memberNameList: ['이채은'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 11,
        name: 'Photoshop',
        memberNameList: ['이해림'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 12,
        name: 'Frame',
        memberNameList: ['정서연'],
        imageUrl: '/images/projects/img-project-1.png',
      },
      {
        id: 13,
        name: 'Livre',
        memberNameList: ['정지원'],
        imageUrl: '/images/projects/img-project-1.png',
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <S.Section>
      <S.TopBackground />
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
                <S.ProjectCategoryItemTitle>{title}</S.ProjectCategoryItemTitle>
                {projectList.length > 0 && (
                  <S.ProjectCardList>
                    {projectList.map(({ id, name, memberNameList, imageUrl }) => (
                      <S.ProjectCardItem key={id}>
                        <S.ProjectCategoryItemLink href={`/projects/${id}`}>
                          <S.ProjectName>{name}</S.ProjectName>
                          {memberNameList.length > 0 && (
                            <S.ProjectMemberList>
                              {memberNameList.map((memberName) => (
                                <S.ProjectMemberItem key={memberName}>
                                  {memberName}
                                </S.ProjectMemberItem>
                              ))}
                            </S.ProjectMemberList>
                          )}
                          <S.ProjectImage src={imageUrl} />
                        </S.ProjectCategoryItemLink>
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
