import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    Component: lazy(() => import('../../pages/home/home')),
  },
  {
    path: '/about',
    Component: lazy(() => import('../../pages/about/about')),
  },
];
