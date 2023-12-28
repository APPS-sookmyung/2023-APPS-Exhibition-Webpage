// Header.jsx 파일 내에서 수정
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import React from 'react';

const Header = () => {
  const navigate = useNavigate();

  const handleNavItemClick = async (pathname, { sectionId } = {}) => {
    await navigate(pathname);

    if (sectionId !== undefined) {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 90;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // 기본속성인 start -> center
        boundary: { top: headerHeight },
      });
    }
  };

  // GitHub 페이지로 이동
  const handleGitHubClick = () => {
    window.open('https://github.com/APPS-sookmyung', '_blank');
  };

  return (
    <S.Header>
      <S.Inner>
        <S.Logo href="/">APPS</S.Logo>
        <S.Nav>
          <S.NavItem
            onClick={() =>
              handleNavItemClick('/', {
                sectionId: 'aboutApps',
              })
            }
          >
            APPS 소개
          </S.NavItem>
          <S.NavItem
            onClick={() =>
              handleNavItemClick('/', {
                sectionId: 'projectsSection',
              })
            }
          >
            프로젝트 소개
          </S.NavItem>
          <S.NavDivider />
          <S.NavItem onClick={handleGitHubClick}>GitHub</S.NavItem>
        </S.Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
