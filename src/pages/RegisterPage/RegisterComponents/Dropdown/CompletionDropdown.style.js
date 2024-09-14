import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DropdownContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const DropdownSelect = styled.span`
  color: #aaa;
`;

export const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  width: 100%;
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1000;
`;

export const DropdownItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 14px 18px;
  width: 100%;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ItemName = styled.p``;
