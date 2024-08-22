import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: white;
  border: 1px solid #4e75ff;
  color: #4e75ff;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:after {
    content: '▼';
    font-size: 12px;
    margin-left: 8px;
    color: #4e75ff;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 8px 0 0;
  list-style: none;
  z-index: 1000;
  width: 100%;
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  font-size: 14px;
  color: #323232;
  cursor: pointer;

  &:hover {
    background-color: #e6f0ff;
  }
`;
