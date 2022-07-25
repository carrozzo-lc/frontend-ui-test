import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import DefaultView from 'components/common/DefaultView';
import MainLayout from './layouts/MainLayout';

const Main = lazy(
  () => import(/* webpackPrefetch: true */ 'components/views/main/Main'),
);
const NotFound = lazy(() => import('components/views/NotFound'));
const Login = lazy(() => import('components/views/Login'));
// [hygen] Import views

export const ROUTE_PATHS = {
  LOGIN: '/login',
  DEFAULT: '/',
  NOT_FOUND: '/404',
  // [hygen] Add path routes
};

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { element: <Navigate to={'/frontend-ui-test'} replace />, index: true },
      { element: <Main />, index: true },
      { path: 'frontend-ui-test', element: <Main /> },
    ],
  },
  { path: ROUTE_PATHS.LOGIN, element: <Login /> },
  {
    path: '*',
    element: (
      <DefaultView>
        <NotFound />
      </DefaultView>
    ),
  },
];

export default routes;
