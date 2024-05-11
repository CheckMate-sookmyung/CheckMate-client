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
                  Gen AI에 입문하는 학생들을 위해 현직 전문가가 직접 이론과 실습
                  기초과정을 강의함
                  <br />
                  프로그램 개요 가. 프로그램명: AI & ML Ops Foundation
                  (입문과정)
                  <br />
                  나. 내용: GenAI에 입문하는 학생들을 위해 현직 전문가가 직접
                  이론과 실습 기초과정을 강의함
                  <br />
                  다. 일시: 24-05-03(월) ~ 24-05-19(일) 1) 05-03(금):
                  오리엔테이션 (오프라인) 2) 05-04(토) ~ 10(금): 온라인 사전교육
                  기간 3) 05-11(토), 19(일): 오프라인 교육 기간 **모두 참석
                  가능한 학생만 신청해 주시기 바랍니다.**
                  <br />
                  라. 장소: SM-MOOC, 숙명여자대학교, AWS 본사 (역삼 센터필드
                  18층)
                  <br />
                  마. 모집: 참여학과 재학생 30명
                  <br />
                  바. 강사: 3명 (보조강사 2명 포함)
                  <br />
                  사. 특전: 마일리지 8,000점
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
  height: auto;
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
  white-space: normal;
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
