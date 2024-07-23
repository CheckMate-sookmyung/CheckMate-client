import styled from 'styled-components';

export const SidebarContainer = styled.div`
  max-width: 250px;
  min-width: 250px;
  height: 100vh;
  border-right: 1px solid #eaeaea;
  padding-right: 10px;
`;

export const MenuItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? '#0075ff' : 'black')};
  padding: 20px 0 0 30px;
`;

export const Subtitle = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;

  padding: 20px 0 0 30px;
  color: black;
`;

export const Content = styled.div`
  color: black;
  font-size: 18px;
  padding: 20px 0 0 30px;
`;

export const Divider = styled.hr`
  border: none;
  width: 80%;
  border-top: 1px solid #eaeaea;
  margin: 10px 0;
`;
