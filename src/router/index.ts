import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import baseRoutes from '../modules/base/routes';
import homeRoutes from '../modules/home/routes';

const routes: RouteObject[] = [
  ...baseRoutes,
  ...homeRoutes,
];

export function RouterView() {
  return useRoutes(routes);
};
