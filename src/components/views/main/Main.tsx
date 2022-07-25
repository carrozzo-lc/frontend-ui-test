import { lazy } from 'react';
import LazyLoadComponent from 'components/common/LazyLoadComponent';
import SidebarContent from '../../common/SidebarContent';
import PageContent from '../../common/PageContent';

const Sidebar = lazy(
  () =>
    import(/* webpackChunkName: 'sidebar' */ 'components/views/main/Sidebar'),
);
const ErrorSnackbar = lazy(
  () =>
    import(
      /* webpackChunkName: 'error-snackbar' */ 'components/common/ErrorSnackbar'
    ),
);

export default function Main() {
  return (
    <LazyLoadComponent>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <PageContent />
      <ErrorSnackbar />
    </LazyLoadComponent>
  );
}
