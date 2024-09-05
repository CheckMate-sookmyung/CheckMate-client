import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '@/styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

// 행사 일정 선택
export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-grow: 1;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
    /* flex-wrap: wrap; */
    gap: 10px;
  }
`;

export const Category = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #323232;
  text-align: left;
  width: 200px;
  flex-shrink: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const DateTimeInput = styled(DatePicker)`
  border: none;
  background-color: #f8f8f8;
  padding: 10px 0 10px 20px;
  width: 80%;
  height: 24px;
  font-size: 18px;
  position: relative;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 70px;
    font-size: 14px;
  }
`;

export const InfoDeleteIconWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

export const InfoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;

  &:hover::after {
    content: '최소 1개 이상의 일정을 등록해주세요.';
    position: absolute;
    top: 80%;
    right: 0;
    margin-top: 5px;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 66%;
    right: 50%;
    transform: translateX(50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

export const DeleteIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AddTimeWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const AddTimeBtn = styled.button`
  border-radius: 8px;
  background-color: #2f7cef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  color: #fff;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 15px;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const HideSection = styled.div`
  display: block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    display: none;
  }
`;
