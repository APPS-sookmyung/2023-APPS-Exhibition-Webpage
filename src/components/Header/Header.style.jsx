import styled from '@emotion/styled';
import { Colors } from '../../theme';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 58px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 10;
  /* top: 0; 섹션 위에 고정 */
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
`;

export const Logo = styled.a`
  font-size: 28px;
  font-weight: 800;
  color: ${Colors.white};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavItem = styled.a`
  font-size: 15px;
  color: ${Colors.white};
  transition: font-weight 0.1s ease;

  &:hover {
    font-weight: 700;
  }
`;
