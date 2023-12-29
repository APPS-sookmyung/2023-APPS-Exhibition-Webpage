import styled from '@emotion/styled';
import { Colors } from '../../theme';
import { BREAKPOINTS } from '../../styles';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 58px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 10;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 54px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 50px;
  }
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
  font-weight: 700;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 26px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 22px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 100%;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
  }
`;

export const NavItem = styled.a`
  font-size: 16px;
  color: ${Colors.lightGrey};
  transition:
    font-weight 0.2s ease,
    color 0.2s ease;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 15px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }

  &:hover {
    font-weight: 600;
    color: ${Colors.white};
  }
`;

export const NavDivider = styled.div`
  display: flex;
  width: 1px;
  height: 18px;
  background-color: ${Colors.lightGrey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 14px;
  }
`;
