import SvgIconStyle from '../../components/common/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/frontend-ui-test/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  home: getIcon('ic_home'),
  maps: getIcon('ic_maps'),
  explorer: getIcon('ic_explorer'),
  observatory: getIcon('ic_observatory'),
  connections: getIcon('ic_connections'),
  applications: getIcon('ic_applications'),
  settings: getIcon('ic_settings'),
};

export const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: ICONS.home,
  },
  {
    title: 'Maps',
    path: '/maps',
    icon: ICONS.maps,
  },
  {
    title: 'Data Explorer',
    path: '/data-explorer',
    icon: ICONS.explorer,
  },
  {
    title: 'Data observatory',
    path: '/data-observatory',
    icon: ICONS.observatory,
  },
  {
    title: 'Connections',
    path: '/connections',
    icon: ICONS.connections,
  },
  {
    title: 'Applications',
    path: 'Applications',
    icon: ICONS.applications,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: ICONS.settings,
  },
];

export default navConfig;
