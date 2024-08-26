import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '../../styles';

export const DashboardInfo = styled.div`
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
  padding: 50px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
  }
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
  line-height: 22px;
  color: #19191a;
  font-weight: bold;
  font-size: 18px;
`;

// 토글
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-radius: 50px;
  background: #e1e3e6;
  padding: 6px 10px;
  width: 160px;
`;

export const ToggleButton = styled.button`
  background: ${(props) => (props.active ? '#ffffff' : 'transparent')};
  border: none;
  border-radius: 50px;
  padding: 2px 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000000' : '#7a7a7a')};
  font-weight: bold;
  font-size: 16px;
  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

// 장소 옵션
export const EventTargetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 행사 일정 선택
export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  width: 80%;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

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

export const Arrow = styled.div`
  width: 100%;
  height: 100%;
`;

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

export const DeleteIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AddTimeWrapper = styled.div``;

export const AddTimeBtn = styled.button`
  color: #2253ff;
  font-weight: 600;
  padding: 6px;
`;

// 행사 내용
export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 14px 16px;
  height: 90px;
  font-size: 16px;
`;

export const ContentDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentDesc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  gap: 10px;
`;
