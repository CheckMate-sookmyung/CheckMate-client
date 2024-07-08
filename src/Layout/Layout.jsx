import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navigator } from '../components/Navigator';

export default function Layout() {
  return (
    <StyledLayout>
      <Navigator />
      <Outlet />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
