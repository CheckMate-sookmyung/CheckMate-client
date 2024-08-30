import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventCardListPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
  gap: 28px;
`;

export const EventCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
