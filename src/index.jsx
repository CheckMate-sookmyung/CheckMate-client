import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>,
);

// 서비스 워커 등록 (중복 제거)
ServiceWorkerRegistration.register();
