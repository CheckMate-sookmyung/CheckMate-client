import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('https://d3k7a7bp6955qn.cloudfront.net/softeer-bootcamp-web/static/images/schedule_bg.png');
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 60%;
  margin: 5rem;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50%; */

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
  }
`;

export const MainFont = styled.p`
  color: black;
  text-align: right;
  font-size: 60px;
  font-weight: 700;
  line-height: 130%;
  padding: 0 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 48px;
  }
`;

export const SubFont = styled.p`
  line-height: 140%;
  padding: 20px 40px;
  word-break: keep-all;
  text-align: right;
  font-size: 24px;
  font-weight: 500;
  color: #333333;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
  }
`;

export const MainNumber = styled.p`
  color: #1e90ff;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  line-height: 130%;
  padding: 0 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 48px;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: right;
  margin: 20px 40px;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: end;
  }
`;

export const BlueButton = styled.button`
  width: 181px;
  height: 56px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: #ffffff;
  background-color: #1e90ff;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #0a2c83;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

//누적알림
