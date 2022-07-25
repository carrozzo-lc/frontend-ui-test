import { MouseEvent, useEffect, useState } from 'react';
import {
  AppBar,
  Drawer,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Link,
  makeStyles,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as CartoLogo } from 'assets/img/carto-logo.svg';
import { ReactComponent as CartoLogoXS } from 'assets/img/carto-logo-xs.svg';
import { ROUTE_PATHS } from 'routes';
import { CustomTheme } from 'theme';
import MainNavigation from '../../components/common/MainNavigation';

const useStylesCommon = makeStyles((theme) => ({
  title: {
    '& h1': {
      display: 'flex',
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.common.white,

      '& strong': {
        marginRight: theme.spacing(0.5),
      },

      '& svg': {
        height: `${theme.typography.subtitle1.lineHeight}em`,
        marginRight: theme.spacing(1.5),
        width: 'auto',
        verticalAlign: 'bottom',
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: 'none',
    zIndex: theme.zIndex.modal + 1,
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Header({ navConfig }: any) {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.header}>
      <Toolbar variant='dense'>
        <Mobile navConfig={navConfig} />
        <Desktop />
      </Toolbar>
    </AppBar>
  );
}

const useStylesDesktop = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(0, 3),
  },
}));

function Desktop() {
  const classes = {
    ...useStylesCommon(),
    ...useStylesDesktop(),
  };

  const hidden = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down('xs'),
  );

  return hidden ? null : (
    <>
      <Link
        component={NavLink}
        to={ROUTE_PATHS.DEFAULT}
        className={classes.title}
      >
        <Typography component='h1' variant='subtitle1' noWrap>
          <CartoLogo />
          <AppName />
        </Typography>
      </Link>
      <NavigationMenu />
      <Grid container item xs justifyContent='flex-end'>
        <UserMenu />
      </Grid>
    </>
  );
}

const useStylesMobile = makeStyles((theme) => ({
  menuButton: {
    margin: theme.spacing(0, 0.75, 0, -1.25),

    '& + hr': {
      marginRight: theme.spacing(1.5),
    },
  },
  drawer: {
    minWidth: 260,
  },
}));

function Mobile({ navConfig }: any) {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = {
    ...useStylesCommon(),
    ...useStylesMobile(),
  };

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const hidden = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.up('sm'),
  );

  return hidden ? null : (
    <>
      <IconButton
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={handleDrawerToggle}
      >
        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Divider orientation='vertical' light />
      <Link
        component={NavLink}
        to={ROUTE_PATHS.DEFAULT}
        className={classes.title}
      >
        <Typography component='h1' variant='subtitle1' noWrap>
          <CartoLogoXS />
          <Divider orientation='vertical' light />
          <AppName />
        </Typography>
      </Link>
      <Drawer
        variant='temporary'
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          className: classes.drawer,
        }}
      >
        <Toolbar variant='dense' />
        <MainNavigation navConfig={navConfig} />
        <Divider />
      </Drawer>
    </>
  );
}

function AppName() {
  return (
    <>
      <div>Workspace</div>
    </>
  );
}

const useStylesNavigationMenu = makeStyles((theme: CustomTheme) => ({
  navTabs: {
    '& .MuiTabs-indicator': {
      backgroundColor:
        theme.palette.appBar?.contrastText ||
        theme.palette.primary?.contrastText,
    },
  },
}));

function NavigationMenu({ column = false }: { column?: boolean }) {
  const classes = useStylesNavigationMenu();

  return (
    <Grid
      container
      direction={column ? 'column' : 'row'}
      className={!column ? classes.navTabs : ''}
    ></Grid>
  );
}

const useStylesUserMenu = makeStyles((theme) => ({
  avatar: {
    cursor: 'pointer',
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    marginLeft: theme.spacing(1),
  },
}));

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & (HTMLAnchorElement | HTMLSpanElement)) | null
  >(null);
  const classes = useStylesUserMenu();

  // At this point, there is an oauthApp and the user has logged in (forceOAuthLogin mode).
  const open = Boolean(anchorEl);

  const handleMenu = (
    event: MouseEvent<HTMLAnchorElement | HTMLSpanElement>,
  ) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Display User menu, with name, avatar + an attached menu for user-related options
  return (
    <>
      <Grid container alignItems='center' item wrap='nowrap'>
        <IconButton>
          <NotificationsNoneIcon style={{ color: 'white', marginRight: 8 }} />
        </IconButton>
        <Link
          aria-label='account of current user'
          aria-controls='menu-login'
          aria-haspopup='true'
          color='inherit'
          onClick={handleMenu}
        >
          <Avatar className={classes.avatar} src={'user.picture'} />
        </Link>
      </Grid>
      <Menu
        id='menu-login'
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>Logout</MenuItem>
        <MenuItem>
          <Link>Go to CARTO</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
