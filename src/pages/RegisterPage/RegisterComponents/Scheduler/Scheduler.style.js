import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BREAKPOINTS } from '../../../../styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

// 행사 일정 선택
export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Category = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #323232;
  text-align: left;
`;

export const DateTimeInput = styled(DatePicker)`
  border: 2px solid #accdff;
  padding: 10px 20px;
  width: auto;
  height: 24px;
  font-size: 18px;
  position: relative;
  border-radius: 10px;

  :focus {
    border: 1px solid #ccc;
    outline: none;
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

export const AddTimeWrapper = styled.div``;

export const AddTimeBtn = styled.button`
  color: #2253ff;
  font-weight: 600;
  padding: 6px;
`;
