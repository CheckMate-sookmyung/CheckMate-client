import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navigator, Sidebar } from '../components/Navigator';

export default function Layout() {
  return (
    <StyledLayout>
      <Navigator />
      <Content>
        {/* <Sidebar /> */}
        <Outlet />
      </Content>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
