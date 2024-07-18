import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #ebedf0;
  padding: 10px 30px;
  width: 100%;
  background-color: white;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 12px 20px;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;

  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const PageMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-left: 2px solid var(--gray-300, #636363);
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-300, #636363);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: black;

  &.active {
    color: #4e75ff;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    /* font-size: 12px; */
  }
`;

export const Profile = styled.button`
  width: 86px;
  height: 30px;
  border: 2px solid #4e75ff;
  border-radius: 4px;
  background-color: white;
  color: #4e75ff;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 60px;
  }
`;
