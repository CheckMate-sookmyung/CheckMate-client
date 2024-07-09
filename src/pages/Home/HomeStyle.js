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
  margin: 5rem 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
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
  color: #333;
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

export const ButtonWrapper = styled.div`
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
  width: 200px;
  height: 56px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 30px;
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

export const NumberWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const PreviewMsg = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 10px;
`;

export const PreviewInfo = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const InfoKey = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const InfoValue = styled.span`
  font-size: 14px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  width: 300px;
  height: 150px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: #111;
  }

  &.active {
    background-color: #efeef3;
    border-color: #111;
  }
`;
