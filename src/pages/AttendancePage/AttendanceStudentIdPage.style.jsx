import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const AttendanceStudentIdPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 90%;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
  padding: 20px;
  gap: 20px;
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
  color: var(--blue-0, #2f7cef);
  font-size: 24px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  border-radius: 10px;
  border: 1px solid var(--LG-2, #e4e4e4);
  background: var(--LG-4, #f8f8f8);
  width: var(--box-size);
  height: var(--box-size);
  font-size: 28px;
  font-weight: 500;

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
  width: 100%;
  height: inherit;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
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
