import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const DashboardStatisticPage = styled.div`
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
