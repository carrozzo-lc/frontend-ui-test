import { lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LazyLoadComponent from 'components/common/LazyLoadComponent';
import SidebarContent from '../../common/SidebarContent';
import PageContent from '../../common/PageContent';

const MapContainer = lazy(
  () =>
    import(
      /* webpackChunkName: 'map-container' */ 'components/views/main/MapContainer'
    ),
);
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

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  // [hygen] Add useEffect

  return (
    <LazyLoadComponent>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <PageContent />
      {/* <MapContainer /> */}
      <ErrorSnackbar />
    </LazyLoadComponent>
  );
}
