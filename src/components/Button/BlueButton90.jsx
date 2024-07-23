import styled from 'styled-components';

export const BlueButton90 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  visibility: visible;
  opacity: 1;
  margin: 0;
  outline: none;
  border: none;
  border-radius: 6px;
  background: var(--blue-400, #0075ff);
  cursor: pointer;
  padding: 4px 10px;
  width: 90px;
  height: 40px;
  text-align: center;
  line-height: 22px;
  letter-spacing: -0.6px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:disabled {
    background: var(--gray-200, #d9d9d9);
    cursor: default;
  }
`;
