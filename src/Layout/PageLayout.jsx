import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${({ hasSideBar }) =>
    hasSideBar === undefined ? undefined : 'flex'};
  width: 100%;
`;

const SideBarLayout = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

export default function PageLayout({ sideBar, children }) {
  return (
    <Container hasSideBar={sideBar !== undefined}>
      <SideBarLayout>{sideBar}</SideBarLayout>
      {children}
    </Container>
  );
}
