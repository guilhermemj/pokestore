import * as React from 'react';
import type { RouteObject } from "react-router-dom";
import PageLoader from '../../components/PageLoader';

const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const routes: RouteObject[] = [
  {
    path: '/about',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <AboutPage />
      </React.Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
];

export default routes;
