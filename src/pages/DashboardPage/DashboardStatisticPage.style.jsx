import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const DetailStatisticsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
  padding: 50px;
  gap: 12px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
  }
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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 32px;
  padding-top: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(50% - 16px);

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
  }
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
