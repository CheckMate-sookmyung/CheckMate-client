import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DetailStatisticsPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
  gap: 30px;

  border: 1px solid red; /* 임시 코드 */
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const EventDate = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
  color: #6b6b6b;
  font-weight: 500;
`;

// 통계
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 32px;
  padding-top: 20px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ChartTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #aecfff;
  background: #fff;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;
