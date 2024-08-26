import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 10px 15px;
  width: 100%;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  height: 50px;

  &::placeholder {
    color: #aaa;
  }
`;
