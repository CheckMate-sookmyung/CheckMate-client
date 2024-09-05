import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { RecoilRoot } from 'recoil';
import ScrollToTop from './components/ScrolltoTop/ScrolltoTop';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </React.StrictMode>
    </RecoilRoot>
  </QueryClientProvider>,
);
