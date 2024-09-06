import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 14px 18px;
  width: 600px;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 440px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
  }
`;
