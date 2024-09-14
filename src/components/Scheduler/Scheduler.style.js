import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '@/styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
`;

// 행사 일정 선택
export const DateTimeListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 14px;
  }
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
  width: 120px;
  height: 20px;
  text-align: center;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 90px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 70px;
  }
`;

export const InfoDeleteIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
`;

export const DeleteIconWrapper = styled.button`
  display: flex;
  width: 20px;
`;

export const AddTimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const HideSection = styled.div`
  display: block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
  }
`;
