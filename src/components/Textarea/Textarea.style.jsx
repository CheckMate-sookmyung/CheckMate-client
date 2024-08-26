import styled from 'styled-components';

export const Textarea = styled.textarea`
  border: none;
  border-radius: 8px;
  background-color: #f8f8f8;
  padding: 14px 18px;
  width: 100%;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  height: 100px;

  &::placeholder {
    color: #aaa;
  }
`;
