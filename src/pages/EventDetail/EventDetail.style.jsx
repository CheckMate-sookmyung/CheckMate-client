import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// 이벤트 수정 + 삭제
export const ChangeEventWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  justify-content: flex-end;
  padding: 10px;
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
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover::after {
    content: '삭제된 행사는 복구할 수 없습니다.';
    position: absolute;
    top: 100%; /* Tooltip below the button */
    right: 0; /* Align tooltip with the right edge of the button */
    margin-top: 10px; /* Adjusted to make room for the arrow */
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 100%;
    right: 30px;
    transform: translateX(50%);
    margin-bottom: 5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }
`;

// 참석자 목록 + 행사 정보
export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  align-items: start;
  max-width: 1200px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: center;
  }
`;

// 참석자 목록
export const AttendanceSection = styled.div`
  width: 60%;
  padding: 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
  }
`;

export const EventTitle = styled.h2`
  font-size: 28px;
  margin: 10px 0;
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
