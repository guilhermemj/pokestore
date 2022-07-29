import * as React from 'react';
import type { RouteObject } from "react-router-dom";

const CatalogPage = React.lazy(() => import('./pages/CatalogPage'));

const routes: RouteObject[] = [
  {
    path: '/catalog',
    element: <CatalogPage />,
  },
];

export default routes;
