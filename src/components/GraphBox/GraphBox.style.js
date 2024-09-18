import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

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
