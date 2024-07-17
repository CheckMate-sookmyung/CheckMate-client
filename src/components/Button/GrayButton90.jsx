import styled from 'styled-components';

export const GrayButton90 = styled.button`
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
  background: #c4c9cd;
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
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #a8b0b6;
  }

  &:disabled {
    background: var(--gray-200, #d9d9d9);
    cursor: default;
  }
`;
