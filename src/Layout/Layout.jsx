import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { TopNavigation } from '@/components';

export default function Layout() {
  return (
    <StyledLayout>
      <TopNavigation />
      <Outlet />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
