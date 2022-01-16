import * as React from 'react';
import type { RouteObject } from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/HomePage'));

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <HomePage />,
  },
];

export default routes;
