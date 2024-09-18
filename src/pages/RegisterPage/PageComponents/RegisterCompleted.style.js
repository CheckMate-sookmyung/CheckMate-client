import styled, { keyframes } from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const Title = styled.h1`
  margin-bottom: 34px;
  font-size: 32px;
  font-weight: 600;
  color: var(--blue-0, #2f7cef);
  text-align: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 26px;
    margin-bottom: 26px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid #accdff;
  border-radius: 8px;
  padding: 20px 0;
  line-height: 130%;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
  }
`;

export const EventTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const EventScheduleList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ScheduleItem = styled.li`
  font-size: 16px;
  text-align: center;
`;

export const GreenCheckImg = styled.img`
  width: 48px;
  height: 40px;
  margin: 20px 0;
`;
