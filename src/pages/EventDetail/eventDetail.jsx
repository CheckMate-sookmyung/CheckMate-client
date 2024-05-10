import React, { useState } from 'react';
import Navigator from '../../components/navigator';
import styled from 'styled-components';
import AttendenceList from './AttendenceList';

export default function EventDetail() {
  const [showList, setShowList] = useState(false);

  const handleList = () => {
    setShowList(true);
  };

  const handleClose = () => {
    setShowList(false);
  };

  return (
    <>
      <Navigator />
      <Background>
        <DetailWrapper>
          <CheckList onClick={handleList}>출석 명단 확인</CheckList>
          {showList && <AttendenceList onClose={handleClose} />}
          <ColumnBox>
            <EventTitle>
              [AI & ML Ops Foundation (입문과정)] 출석체크
            </EventTitle>
            <BoxWrapper>
              <BlueBox>
                <BlueBoxTitle>행사 설명</BlueBoxTitle>
                <BlueBoxContent>
                  {/* 콘텐츠 받기 */}
                  1주차 : 프론트엔드 이해 및 웹 개발 기초 <br />
                  2주차 : React 기초1
                  <br />
                  3주차 : React 기초2 <br />
                  4주차 : 메모장 프로젝트 <br />
                  5주차 : 에어비엔비 클론 코딩
                </BlueBoxContent>
              </BlueBox>
            </BoxWrapper>
          </ColumnBox>
        </DetailWrapper>
      </Background>
    </>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 300px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 500px;
  height: 180px;
  border: 1px solid #1f5fa9;
  border-radius: 4px;
  padding: 20px;
  gap: 20px;
`;

const BlueBoxTitle = styled.p`
  color: #1f5fa9;
  font-size: 16px;
`;

const BlueBoxContent = styled.p`
  color: black;
  font-size: 16px;
`;

const EventTitle = styled.p`
  display: flex;
  font-size: 32px;
`;

const CheckList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 280px;
  height: 56px;
  border: none;
  border-radius: 4px;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
`;
