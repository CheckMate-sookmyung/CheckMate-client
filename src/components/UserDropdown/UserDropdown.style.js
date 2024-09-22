import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  transform: translate(-75px, 10px);
`;

export const DropdownContent = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  margin: 8px 0 0;
  border: 1px solid var(--blue-4, #accdff);
  border-radius: 7px;
  background: #f4f8ff;
  padding: 4px;
  min-width: max-content;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
`;

export const DropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 4px;

  font-size: 14px;
  color: #323232;
  cursor: pointer;

  &:hover {
    background: var(--blue-4, #accdff);
  }
`;
