import React, { useState } from 'react';
import styled from 'styled-components';
import dot from '../icons/registerPage/dot.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navigator() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('');

  const clickedMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const clickedLogo = () => {
    navigate('/');
  };

  return (
    <>
      <Background>
        <NavWrapper>
          <MainMenu style={{ marginTop: '6px' }} onClick={clickedLogo}>
            행사 관리 시스템
          </MainMenu>
          <NavCenter>
            <MenuContainer onClick={() => clickedMenu('행사 등록')}>
              <Bluedot isVisible={selectedMenu === '행사 등록'} />
              <MainMenu isSelected={selectedMenu === '행사 등록'}>
                <StyledNavLink to="/register">행사 등록</StyledNavLink>
              </MainMenu>
            </MenuContainer>
            <MenuContainer onClick={() => clickedMenu('진행중인 행사')}>
              <Bluedot isVisible={selectedMenu === '진행중인 행사'} />
              <MainMenu isSelected={selectedMenu === '진행중인 행사'}>
                <StyledNavLink to="/currentEvent">진행중인 행사</StyledNavLink>
              </MainMenu>
            </MenuContainer>
            <MenuContainer onClick={() => clickedMenu('지난 행사')}>
              <Bluedot isVisible={selectedMenu === '지난 행사'} />
              <MainMenu isSelected={selectedMenu === '지난 행사'}>
                지난 행사
              </MainMenu>
            </MenuContainer>
          </NavCenter>
          <LogButton>로그아웃</LogButton>
        </NavWrapper>
      </Background>
    </>
  );
}

const Background = styled.div`
  justify-content: center;
  align-content: center;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100%;
`;

const NavCenter = styled.nav`
  display: flex;
  gap: 40px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
  &:active {
    color: inherit;
  }
`;

const Bluedot = styled.div`
  width: 6px;
  height: 6px;
  margin: 5px;
  background-image: url(${dot});
  background-size: cover;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

const MainMenu = styled.div`
  list-style: none;
  cursor: pointer;
  font-weight: 700;
  color: ${(props) => (props.isSelected ? '#1f5fa9' : 'black')};
`;

const LogButton = styled.button`
  background-color: white;
  color: #1f5fa9;
  width: 86px;
  height: 30px;
  margin-top: 6px;
  border: 2px #1f5fa9 solid;
  border-radius: 4px;
`;
