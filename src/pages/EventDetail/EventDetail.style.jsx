import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// 이벤트 수정
export const ChangeEventWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 80px;
  margin-left: auto;
`;

export const EditEventButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #0075ff;
`;

export const DeleteEventButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #0075ff;
`;

// 참석자 목록
export const DetailWrapper = styled.div`
  width: auto;
  padding: 20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AttendanceSection = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AttendanceListWrapper = styled.div`
  min-height: 800px;
  margin-bottom: 20px;
  overflow: scroll;
`;

// 행사 정보
export const EventSection = styled.div`
  width: 40%;
  padding: 10px;
`;

export const EventTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const EventContent = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 20px;
`;

export const EventContentTitle = styled.p`
  color: #0075ff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const EventContentDescription = styled.p`
  font-size: 16px;
`;

export const SendButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

export const SendButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #0075ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0167cd;
  }
`;
