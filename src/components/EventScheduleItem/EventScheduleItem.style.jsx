import styled from 'styled-components';
import DatePicker from 'react-datepicker';

// 행사 일정 선택 컨테이너
export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  width: 80%;
`;

// 날짜 및 시간 선택 래퍼
export const DateTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// 날짜 및 시간 선택 입력 필드
export const DateTimeInput = styled(DatePicker)`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 6px;
  width: 90px;
  height: 14px;
  font-size: 16px;
  text-align: center;

  :focus {
    border: 1px solid #ccc;
    outline: none;
  }
`;

// 화살표 아이콘 스타일
export const Arrow = styled.div`
  width: 100%;
  height: 100%;
`;

// 정보 및 삭제 아이콘 래퍼
export const InfoDeleteIconWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

// 정보 아이콘 스타일 및 툴팁
export const InfoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;

  &:hover::after {
    content: '최소 1개 이상의 일정을 등록해주세요.';
    position: absolute;
    top: 80%;
    right: 0;
    margin-top: 5px;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 66%;
    right: 50%;
    transform: translateX(50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

// 삭제 아이콘 버튼 스타일
export const DeleteIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

// 일정 추가 버튼 래퍼
export const AddTimeWrapper = styled.div``;

// 일정 추가 버튼 스타일
export const AddTimeBtn = styled.button`
  color: #2253ff;
  font-weight: 600;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
`;
