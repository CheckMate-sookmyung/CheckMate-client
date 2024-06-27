import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AttendanceList from './AttendanceList';
import { USER_ID, EVENT_ID } from '../../constants';
import { axiosInstance } from '../../axios';

const EventDetail = () => {
  const [parsedEvents, setParsedEvents] = useState(null);

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
          };
          setParsedEvents(parsedEvent);
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEmail = async () => {
    const isConfirmed = window.confirm(
      '출석 명단을 지정된 이메일로 전송하시겠습니까?\n확인 버튼을 누르는 즉시 이메일 전송이 완료됩니다.',
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await axiosInstance.get(
        `api/v1/attendance/list/${USER_ID}/${EVENT_ID}`,
      );
      if (response.status === 200) {
        alert('전송이 완료됐습니다.');
        console.log(response);
      }
    } catch (error) {
      alert('전송에 실패했습니다.');
      console.log(error);
    }
  };

  return (
    <Background>
      {parsedEvents && (
        <DetailWrapper>
          <AttendanceSection>
            <AttendanceListWrapper>
              <AttendanceList />
            </AttendanceListWrapper>
          </AttendanceSection>
          <EventSection>
            <EventTitle>{parsedEvents.title}</EventTitle>
            <BlueBox>
              <BlueBoxTitle>행사 설명</BlueBoxTitle>
              <BlueBoxContent>{parsedEvents.detail}</BlueBoxContent>
            </BlueBox>
            <ButtonWrapper>
              <CheckList onClick={handleEmail}>출석 명단 전송</CheckList>
            </ButtonWrapper>
          </EventSection>
        </DetailWrapper>
      )}
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

const DetailWrapper = styled.div`
  width: auto;
  margin: 20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AttendanceSection = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AttendanceListWrapper = styled.div`
  min-height: 800px;
  margin-bottom: 20px;
  /* border: 3px solid black; */
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const EventSection = styled.div`
  width: 40%;
  margin-top: 20px;
`;

const EventTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const BlueBox = styled.div`
  border: 1px solid #1f5fa9;
  border-radius: 4px;
  padding: 20px;
`;

const BlueBoxTitle = styled.p`
  color: #1f5fa9;
  font-size: 18px;
  margin-bottom: 10px;
`;

const BlueBoxContent = styled.p`
  font-size: 16px;
`;

const CheckList = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #1f5fa9;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export default EventDetail;
