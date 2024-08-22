import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const EventCardListPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  gap: 30px;
`;

export const EventCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
