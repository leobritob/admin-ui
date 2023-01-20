import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SidebarLayout } from '~/layout';
import { HomePage, UsersPage } from '~/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SidebarLayout>
        <HomePage />
      </SidebarLayout>
    ),
  },
  {
    path: '/users',
    element: (
      <SidebarLayout>
        <UsersPage />
      </SidebarLayout>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
