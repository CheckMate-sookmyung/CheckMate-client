import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  background-color: white;
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: black;
  &.active {
    color: #1f5fa9;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const Profile = styled.button`
  width: 86px;
  height: 30px;
  border: 2px solid #1f5fa9;
  border-radius: 4px;
  background-color: white;
  color: #1f5fa9;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 60px;
  }
`;
