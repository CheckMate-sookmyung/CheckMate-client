import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 30px;
  /* margin-bottom: 10px; */
  padding: 20px;
  color: var(--gray-300, #636363);

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
  }
`;

export const StudentId = styled.div`
  --box-size: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 3px #d9d9d9;
  width: var(--box-size);
  height: var(--box-size);
  font-size: 60px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    --box-size: 50px;
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    --box-size: 40px;
    font-size: 36px;
  }
`;

export const DialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 80%;
  height: inherit;
  border-collapse: collapse;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 90%;
  }
`;

export const Dial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-width: 1px 0 0 1px;
  width: 100%;
  height: 100%;
  padding: 20px 80px;
  font-size: 40px;
  font-weight: 600;
  color: #838383;
  background-color: white;

  &:nth-child(3n) {
    border-right: 1px solid #d9d9d9;
  }
  &:nth-last-child(-n + 3) {
    border-bottom: 1px solid #d9d9d9;
  }

  // 모서리 부분 스타일 추가
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:nth-child(3) {
    border-top-right-radius: 10px;
  }
  &:nth-child(10) {
    border-bottom-left-radius: 10px;
  }

  @media (max-width: ${BREAKPOINTS[2]}px) {
    padding: 20px 60px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 20px 44px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px 30px;
  }
`;

export const GoToSignBtn = styled.div`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#0075FF' : '#BDDBFF'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 26px;
  }
`;
