import React, { useEffect, useState } from 'react';
import Navigator from '../../components/navigator';
import styled from 'styled-components';
import AttendenceList from './AttendenceList';
import { USER_ID, EVENT_ID } from '../../constants';
import { axiosInstance } from '../../axios';

export default function EventDetail() {
  const [showList, setShowList] = useState(false);
  const [parsedEvents, setParsedEvents] = useState(null);

  const handleList = () => {
    setShowList(true);
  };

  const handleClose = () => {
    setShowList(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/event/detail/${USER_ID}/${EVENT_ID}`,
        );

        const eventData = response.data.result;
        if (eventData) {
          const parsedEvent = {
            title: eventData.eventTitle,
            detail: eventData.eventDetail,
            poster: eventData.eventImage,
          };
          setParsedEvents(parsedEvent);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigator />
      <Background>
        <DetailWrapper>
          <ColumnBox>
            {parsedEvents && (
              <>
                <EventTitle>{parsedEvents.title}</EventTitle>
                <BoxWrapper>
                  <BlueBox>
                    <BlueBoxTitle>행사 설명</BlueBoxTitle>
                    <BlueBoxContent>{parsedEvents.detail}</BlueBoxContent>
                  </BlueBox>
                </BoxWrapper>
                <CheckList onClick={handleList}>출석 명단 확인</CheckList>
                {showList && <AttendenceList onClose={handleClose} />}
              </>
            )}
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
