import styled from 'styled-components';

export const TabButton90 = styled.button`
  padding: 10px 10px;
  border: 1px solid #4e75ff;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? '#4e75ff;' : '#fff')};
  width: 90px;
  height: 40px;
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #4e75ff;
    color: #fff;
  }
`;
