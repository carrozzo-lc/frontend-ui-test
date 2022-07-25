import { lazy } from 'react';
import LazyLoadComponent from 'components/common/LazyLoadComponent';

const Sidebar = lazy(
  () =>
    import(/* webpackChunkName: 'sidebar' */ 'components/views/main/Sidebar'),
);
const SidebarContent = lazy(
  () =>
    import(
      /* webpackChunkName: 'sidebar' */ 'components/common/SidebarContent'
    ),
);
const PageContent = lazy(
  () =>
    import(/* webpackChunkName: 'sidebar' */ 'components/common/PageContent'),
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
