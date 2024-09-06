import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '@/styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 행사 일정 선택
export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 6px;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const DateTimeInput = styled(DatePicker)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 10px;
  height: 20px;
  text-align: center;
  font-size: 14px;

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
  justify-content: center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

export const InfoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 14px;
`;

export const AddTimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HideSection = styled.div`
  display: block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
  }
`;
