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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 10px 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 10px;
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
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 20px;
    padding: 6px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 0px;
    padding: 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 0;
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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
  }
`;

export const PageNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    display: none;
  }
`;

export const PageName = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-left: 2px solid var(--gray-300, #636363);
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-300, #636363);

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 0 10px;
    font-size: 14px;
  }
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
  --box-size: 30px;

  width: var(--box-size);
  height: var(--box-size);
  color: var(--gray-200, #d9d9d9);
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    --box-size: 24px;
  }
`;
