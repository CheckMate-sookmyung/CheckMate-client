import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 13px 22px;
  height: 45px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 18px;
    font-size: 14px;
  }
`;
