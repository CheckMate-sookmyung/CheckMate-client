import styled from 'styled-components';

export const SidebarContainer = styled.div`
  min-width: 180px;
  height: 100vh;
  padding-top: 35px;
`;

export const MenuItemContainer = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid #ebedf0;
  padding-bottom: 8px;
`;

export const Title = styled.h1`
  padding: 12px 20px;
  color: ${({ isActive }) => (isActive ? '#0075ff' : 'black')};
  font-size: 16px;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 20px;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const SubtitleContent = styled.span`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: #818181;
  line-height: 1.2;
`;
