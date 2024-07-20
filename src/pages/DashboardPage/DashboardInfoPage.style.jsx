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
  margin-bottom: 30px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
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

export const ContentInput = styled.input`
  background: #ffffff;
  border: 1px solid #c4c8cc;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 14px 16px;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  color: #2c2d2e;
`;

export const ContentInputText = styled.p``;

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

export const ToggleBtn = styled.button`
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
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RadioButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin: 0;
  border: 1px solid #2253ff;
  border-radius: 50px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:checked::before {
    width: 10px;
    height: 10px;
    background: #4e75ff;
    border-radius: 50%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OptionTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #2c2d2e;
`;

export const OptionDescription = styled.span`
  font-size: 14px;
  color: #76787a;
`;

// 행사 일정 선택
export const DateTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateTimeInput = styled(DatePicker)`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 14px 10px;
  width: 90px;
  height: 19px;
  font-size: 16px;
  text-align: center;
`;

export const Arrow = styled.div`
  height: 100%;
  width: 100%;
`;

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
