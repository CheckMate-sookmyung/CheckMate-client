import React, { useState } from 'react';
import styled from 'styled-components';
import dot from '../icons/registerPage/dot.svg';

export default function Navigator() {
  const [isSelect, setIsSelected] = useState(false);

  const clickedMenu = () => {
    setIsSelected(true);
  };

  return (
    <>
      <Background>
        <NavWrapper>
          <MainMenu style={{ marginTop: '6px' }}>행사 관리 시스템</MainMenu>
          <NavCenter>
            <div>
              <Bluedot>
                <img src={dot} alt="" />
              </Bluedot>
              <MainMenu>행사 등록</MainMenu>
            </div>
            <div>
              <Bluedot>
                <img src={dot} alt="" />
              </Bluedot>
              <MainMenu>진행중인 행사</MainMenu>
            </div>
            <div>
              <Bluedot>
                <img src={dot} alt="" />
              </Bluedot>
              <MainMenu>지난 행사</MainMenu>
            </div>
          </NavCenter>
          <LogButton>로그아웃</LogButton>
        </NavWrapper>
      </Background>
    </>
  );
}

//네브 바 스타일 컴포넌트
const Background = styled.div`
  /* position: fixed; */
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

const Bluedot = styled.div`
  display: flex;
  background-size: cover;
  width: 6px;
  height: 6px;
  visibility: hidden;
`;

const MainMenu = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 700;
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
