import styled from 'styled-components';

export const SidebarContainer = styled.div`
  min-width: 180px;
  height: 100vh;
  border-right: 1px solid #ebedf0;
  padding-top: 35px;
  /* padding-right: 10px; */
`;

export const MenuItemContainer = styled.div`
  /* margin-bottom: 20px; */
  margin-bottom: 8px;
  border-bottom: 1px solid #ebedf0;
  padding-bottom: 8px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? '#0075ff' : 'black')};
  padding: 12px 20px;
  /* padding: 20px 0 0 30px; */
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  padding: 12px 20px;
`;

export const Subtitle = styled.div`
  /* margin-top: 5px; */
  font-size: 14px;
  /* font-weight: bold; */

  /* padding: 20px 0 0 30px; */
  color: black;
`;

export const Content = styled.div`
  color: black;
  font-size: 18px;
  /* padding: 20px 0 0 30px; */
`;

export const Divider = styled.hr`
  border: none;
  width: 80%;
  /* margin: 10px 0; */
`;
