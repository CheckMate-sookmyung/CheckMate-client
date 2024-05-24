import React, { useEffect, useState } from 'react';
import Navigator from '../../components/navigator';
import styled from 'styled-components';
import AttendanceList from './AttendanceList';
import { USER_ID, EVENT_ID } from '../../constants';
import { axiosInstance } from '../../axios';

export default function EventDetail() {
  const [showList, setShowList] = useState(false);
  const [parsedEvents, setParsedEvents] = useState(null);

  const handleList = () => {
    setShowList(true);
  };

  const handleEmail = async () => {
    try {
      const response = await axiosInstance.get(
        `api/v1/attendance/list/${USER_ID}/${EVENT_ID}`,
      );
      if (response == 200) {
        console.log('전송 완료');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setShowList(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        if (eventData) {
          const parsedEvent = {
            title: eventData.eventTitle,
            detail: eventData.eventDetail,
            poster: eventData.eventImage,
          };
          setParsedEvents(parsedEvent);
          console.log(parsedEvent);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Background>
        {parsedEvents && (
          <DetailWrapper>
            <ImgBox src={parsedEvents.poster} alt="" />
            <ColumnBox>
              <>
                <EventTitle>{parsedEvents.title}</EventTitle>
                <BoxWrapper>
                  <BlueBox>
                    <BlueBoxTitle>행사 설명</BlueBoxTitle>
                    <BlueBoxContent>{parsedEvents.detail}</BlueBoxContent>
                  </BlueBox>
                </BoxWrapper>
                <BoxWrapper>
                  <CheckList onClick={handleList}>출석 명단 확인</CheckList>
                  {showList && <AttendanceList onClose={handleClose} />}
                  <CheckList onClick={handleEmail}>출석 명단 전송</CheckList>
                </BoxWrapper>
              </>
            </ColumnBox>
          </DetailWrapper>
        )}
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
  align-items: center;
  gap: 300px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ImgBox = styled.img`
  width: 30vw;
  height: 80vh;
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
