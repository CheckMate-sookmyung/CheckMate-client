import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '@/styles';

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
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
export const EventTypeCardWrapper = styled.div`
  display: flex;
`;

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
