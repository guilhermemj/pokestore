import * as React from 'react';
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import baseRoutes from '../../modules/base/routes';
import catalogRoutes from '../../modules/catalog/routes';
import homeRoutes from '../../modules/home/routes';

import Redirect from './Redirect';
import PageLoader from './PageLoader';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Redirect replace to='/home' />,
  },

  ...baseRoutes,
  ...catalogRoutes,
  ...homeRoutes,
];

export function RouterView() {
  return (
    <React.Suspense fallback={<PageLoader />}>
      {useRoutes(routes)}
    </React.Suspense>
  );
};
