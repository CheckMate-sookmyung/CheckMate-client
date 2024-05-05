import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: fit-content;
`;

export const Circle = styled.div`
  --circle-size: ${({ active }) => (active ? '20px' : '16px')};

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--circle-size);
  height: var(--circle-size);
  border: ${({ completed }) => (completed ? '1px solid #ffffff' : undefined)};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#ffffff' : '#82abfc')};
`;

export const Label = styled.span`
  color: #ffffff;
  font-size: 14px;
`;
