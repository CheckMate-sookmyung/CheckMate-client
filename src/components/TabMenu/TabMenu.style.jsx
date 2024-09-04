import styled from 'styled-components';

export const TabMenu = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 9px 18px;
  background: ${(props) => (props.active ? '#2f7cef' : '#F2F2F2')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  font-size: 13px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: #2f7cef;
    color: #fff;
  }
`;
