import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  /* position: fixed; */
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const MainMenu = styled.h1`
  font-size: 24px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const NavCenter = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Bluedot = styled.div`
  width: 6px;
  height: 6px;
  margin: 5px;
  background-color: #1f5fa9;
  border-radius: 50%;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const LogButton = styled.button`
  background-color: white;
  color: #1f5fa9;
  width: 86px;
  height: 30px;
  border: 2px solid #1f5fa9;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 60px;
  }
`;
