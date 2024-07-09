import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const EventImgWrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 260px;
  justify-content: center;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 420 / 594;
  object-fit: cover;
`;

export const EventCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  padding: 50px 20px;

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

export const EventTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 10px;
`;

export const EventDate = styled.div`
  display: flex;
  gap: 12px;
  margin: 10px 0px;
`;

export const CardDay = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
  font-size: 16px;
`;
