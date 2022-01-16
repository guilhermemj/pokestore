import * as React from 'react';
import type { RouteObject } from "react-router-dom";

const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const routes: RouteObject[] = [
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default routes;
