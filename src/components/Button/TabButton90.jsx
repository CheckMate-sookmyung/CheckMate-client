import styled from 'styled-components';

export const TabButton90 = styled.button`
  padding: 10px 20px;
  border: 1px solid #4e75ff;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#4e75ff;' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #4e75ff;
    color: #fff;
  }
`;
