import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const DashboardAttendee = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
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
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #4e75ff;
    color: #fff;
  }
`;

// 검색창
export const SearchRageContainer = styled.div`
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

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: #f2f3f5;
  padding: 0 14px;
  width: 420px;
  height: 40px;
`;

export const SearchBox = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #000;
  background-color: transparent;

  &::placeholder {
    color: #aaaeb3;
  }
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
  margin: 0 5px;
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
