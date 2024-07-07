import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid #ebedf0;
  padding-top: 35px;
  min-width: 200px;
  height: 100%;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 5px 0;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    color: #4e75ff;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  flex-grow: 1;
`;
