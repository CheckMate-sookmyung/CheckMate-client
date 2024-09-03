import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const AttendanceStudentIdPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('/img/background-attendance.svg');
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
  padding: 30px 20px;
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
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const StudentId = styled.div`
  --box-size: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--LG-2, #e4e4e4);
  background: var(--LG-4, #f8f8f8);
  width: var(--box-size);
  height: var(--box-size);
  font-size: 28px;
  font-weight: 500;
  flex-grow: 1;
  max-width: var(--box-size);
  margin: 0 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    --box-size: 60px;
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    --box-size: 50px;
    font-size: 36px;
  }
`;

export const DialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 10px;
`;

export const Dial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 40px;
  font-weight: 600;
  color: #2f7cef;
  background-color: #f5faff;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: #e0f0ff;
  }

  &:nth-child(10) {
    grid-column: span 1;
    background-color: #fff;
    font-size: 40px;
  }

  &:nth-child(11) {
    color: #2f7cef;
    grid-column: span 1;
    border-radius: 10px;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const GoToSignBtn = styled.div`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#2f7cef' : '#BDDBFF'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 10px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  word-break: keep-all;
  cursor: ${({ isSevenDigits }) => (isSevenDigits ? 'pointer' : 'default')};

  &:hover {
    background-color: ${({ isSevenDigits }) =>
      isSevenDigits ? '#1e5bbf' : '#BDDBFF'};
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;
