import React from 'react';
import styled from 'styled-components';

const Inner = styled.div`
  display: ${({ hasSideBar }) =>
    hasSideBar === undefined ? undefined : 'flex'};
  width: 100%;
`;

const SideBarLayout = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

export default function PageLayout({ topNavigation, sideBar, children }) {
  return (
    <div>
      {topNavigation}
      <Inner hasSideBar={sideBar !== undefined}>
        <SideBarLayout>{sideBar}</SideBarLayout>
        {children}
      </Inner>
    </div>
  );
}
