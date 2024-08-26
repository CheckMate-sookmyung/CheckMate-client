import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const DashboardEmail = styled.div`
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
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

// 탭정보
export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 32px;
  padding-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const ContentDesc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  overflow: auto;
`;

// 버튼 스타일
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  gap: 10px;
`;
