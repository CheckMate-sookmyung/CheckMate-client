import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from '../components/Navigator';

export default function Layout() {
  return (
    <div>
      <Navigator />
      <Outlet />
    </div>
  );
}
