import styled from 'styled-components';

export const SlimButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dddee0;
  padding: 9px 18px;
  background-color: #fff;
  font-weight: 600;
  font-size: 14px;
  height: 30px;
  color: #4e75ff;
  cursor: pointer;
  gap: 6px;
  transition:
    background 0.5s ease-in-out,
    box-shadow 0.6s ease-in-out,
    transform 0.4s ease-in-out,
    color 0.4s ease-in-out;

  &:hover {
    background: #4e75ff;
    color: #fff;
  }
`;
