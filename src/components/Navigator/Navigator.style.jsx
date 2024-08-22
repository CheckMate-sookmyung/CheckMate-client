import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const Navigator = styled.div`
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
  gap: 10px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Menu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &.active {
    color: #4e75ff;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const PageNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
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

// 프로필
export const ProfileMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    --box-size: 24px;
  }
`;

export const ProfileIconWrapper = styled.button`
  --box-size: 30px;

  width: var(--box-size);
  height: var(--box-size);
  color: var(--gray-200, #d9d9d9);

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    --box-size: 26px;
    display: flex;
  }
`;

export const MenuIconWrapper = styled.div`
  --box-size: 30px;

  display: none;
  align-items: center;
  width: var(--box-size);
  height: var(--box-size);
  color: var(--gray-200, #d9d9d9);

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    --box-size: 24px;
    display: flex;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 55px;
  right: 0;
  height: calc(100% - 60px);
  width: 180px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const Dim = styled.div`
  opacity: 0.2;
  position: fixed;
  top: 55px;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;
