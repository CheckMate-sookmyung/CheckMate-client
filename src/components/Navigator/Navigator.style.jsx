import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #ebedf0;
  padding: 12px 40px;
  width: 100%;
  background-color: white;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 0 20px;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
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
    /* gap: 10px; */
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
