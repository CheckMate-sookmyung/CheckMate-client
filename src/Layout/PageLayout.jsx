import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${({ hasSideBar }) =>
    hasSideBar === undefined ? undefined : 'flex'};
  width: 100%;
`;

export default function PageLayout({ sideBar, children }) {
  return (
    <Container hasSideBar={sideBar !== undefined}>
      {sideBar}
      {children}
    </Container>
  );
}
