import type { ReactNode } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { Paths } from './utils/paths';
import { ChatPage, LoginPage } from './pages';

interface IRoute {
  path: string;
  element: ReactNode;
}

interface IRouteEnableWrapper {
  children: ReactNode;
}

const routes: IRoute[] = [
  {
    path: `${Paths.CHAT}/*`,
    element: <ChatPage />,
  },
  {
    path: '*',
    element: <Navigate to={Paths.CHAT} replace />,
  },
];

export const RouteEnableWrapper = ({ children }: IRouteEnableWrapper) => {
  const isAuth = false;

  return isAuth ? <>{children}</> : <Navigate to={Paths.LOGIN} replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LoginPage />} />
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<RouteEnableWrapper>{element}</RouteEnableWrapper>}
        />
      ))}
    </>,
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
}

export default Router;
