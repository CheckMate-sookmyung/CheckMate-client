import { BREAKPOINTS } from '@/styles';
import DatePicker from 'react-datepicker';
import { PiTildeBold } from 'react-icons/pi';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.div`
  display: flex;
  color: #6b6b6b;
  font-size: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    display: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border: none;
  background-color: #f8f8f8;
  padding: 10px 0 10px 20px;
  height: 24px;
  width: 128px;
  font-size: 18px;
  position: relative;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const TildeIcon = styled(PiTildeBold)`
  color: #2f7cef;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    display: none;
  }
`;
