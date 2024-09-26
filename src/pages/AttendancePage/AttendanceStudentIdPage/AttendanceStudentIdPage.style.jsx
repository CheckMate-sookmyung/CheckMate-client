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
  color: #494949;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  & > span {
    color: #2f7cef;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 26px;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--LG-2, #e4e4e4);
  background: var(--LG-4, #f8f8f8);
  width: 100%;
  height: 80px;
  font-size: 32px;
  font-weight: 600;
  flex-grow: 1;
  max-width: 110px;
  margin: 0 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 60px;
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 36px;
    margin: 2px;
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

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

// 모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 66px 40px;
  width: 800px;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 500px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 300px;
    padding: 30px 16px 20px;
  }
`;

export const ModalTitle = styled.h2`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  font-size: 32px;
  font-weight: 600;
  color: var(--blue-0, #2f7cef);
  line-height: 1.2;
  word-break: keep-all;
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

export const AttendeeList = styled.div`
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

export const AttendeeItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 38px;
  border-radius: 10px;
  border: 1px solid var(--blue-4, #accdff);
  background: #f4f8ff;
  font-size: 16px;
  gap: 26px;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 10px 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 18px;
    gap: 10px;
  }
`;

export const AttendeeName = styled.span`
  color: var(--Black-2, #323232);
  font-size: 24px;
  font-weight: 500;
  padding: 0 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const AttendeeInfo = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 30px;
  border: 1px solid #aecfff;
  padding: 12px 26px;
  background: var(--White, #fff);
  gap: 8px;
  color: var(--blue-0, #2f7cef);
  font-size: 20px;
  font-weight: 500;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseButton = styled.button`
  margin-top: 36px;
  border-radius: 10px;
  padding: 20px 28px;
  background: var(--LG-3, #f2f2f2);
  font-size: 20px;
  font-weight: 600;
  color: var(--DG-2, #818181);
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 12px 20px;
    font-size: 16px;
  }
`;
