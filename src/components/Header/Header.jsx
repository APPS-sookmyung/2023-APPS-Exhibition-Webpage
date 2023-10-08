import * as S from './Header.style';

const Header = () => {
  return (
    <S.Header>
      <S.Inner>
        <S.Logo href="/">APPS</S.Logo>
        <S.Nav>
          <S.NavItem href="/">APPS 소개</S.NavItem>
          <S.NavItem href="/">프로젝트 소개</S.NavItem>
        </S.Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
