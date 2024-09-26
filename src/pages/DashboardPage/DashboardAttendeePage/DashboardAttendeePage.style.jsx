import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const DashboardAttendee = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: fit-content;
  padding: 50px;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
  }
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DownBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dddee0;
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
  height: 30px;
  color: #4e75ff;
  cursor: pointer;
  gap: 6px;
  transition:
    background 0.5s ease-in-out,
    box-shadow 0.6s ease-in-out,
    transform 0.4s ease-in-out,
    color 0.4s ease-in-out;

  &:hover {
    background: #4e75ff;
    color: #fff;
  }
`;

// 검색창
export const SearchRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f5;
  border-radius: 8px;
  padding: 0 20px;
  min-width: 180px;
  height: 40px;
  gap: 10px;
`;

export const RateTitle = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #4e75ff;
`;

export const Attendee = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

// 탭정보 및 출석 수정 모드
export const TabEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditMode = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-radius: 7px;
  border: 1px solid #ff69b4;
  cursor: pointer;
  min-width: 84px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => (props.active ? '#ff69b4' : 'white')};
  color: ${(props) => (props.active ? '#fff' : '#ff69b4')};
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
`;

export const AddDeleteButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// 참석자 추가 버튼 + 출석 여부 수정하기 버튼
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

// 모달
export const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  gap: 10px;
`;

export const FileUploadWrapper = styled.div`
  width: auto;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > Button {
    white-space: nowrap;
  }
`;

export const FileLabel = styled.label`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? '#a0a0a0' : '#000')};
  text-align: center;
  width: 100%;
  height: 28px;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#f5f5f5')};
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;

  & > button {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
