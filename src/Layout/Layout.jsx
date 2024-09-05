import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
