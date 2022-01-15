import * as React from 'react';
import type { RouteObject } from "react-router-dom";
import PageLoader from '../../components/PageLoader';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <HomePage />
      </React.Suspense>
    ),
  },
];

export default routes;
