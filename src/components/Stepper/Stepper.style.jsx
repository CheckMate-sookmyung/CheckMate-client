import styled from 'styled-components';
import Step from '../Step/Step';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StepItem = styled.div`
  position: relative;
  flex: 1 1 0%;
`;

export const Line = styled.div`
  position: absolute;
  top: 8px;
  left: calc(-50% + 16px);
  right: calc(50% + 16px);
  border: 1px solid ${({ completed }) => (completed ? '#ffffff' : '#82abfc')};
`;
