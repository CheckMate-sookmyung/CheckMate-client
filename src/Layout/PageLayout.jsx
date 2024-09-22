import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';

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

const Contents = styled.div`
  --top-navigation-height: 57px;

  overflow-y: auto;
  display: flex;
  width: 100%;
  height: calc(100vh - var(--top-navigation-height));

  @media (max-width: ${BREAKPOINTS[1]}px) {
    --top-navigation-height: 55px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    --top-navigation-height: 54px;
  }
`;

export default function PageLayout({ topNavigation, sideBar, children }) {
  return (
    <div>
      {topNavigation}
      <Inner hasSideBar={sideBar !== undefined}>
        <SideBarLayout>{sideBar}</SideBarLayout>
        <Contents>{children}</Contents>
      </Inner>
    </div>
  );
}
