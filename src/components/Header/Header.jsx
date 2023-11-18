// Header.jsx 파일 내에서 수정
import * as S from './Header.style';
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 기본속성
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
          <S.NavItem onClick={() => scrollToSection('aboutApps')}>APPS 소개</S.NavItem>
          <S.NavItem onClick={() => scrollToSection('projectsSection')}>프로젝트 소개</S.NavItem>
          <S.NavItem onClick={handleGitHubClick}>깃허브</S.NavItem>
        </S.Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
