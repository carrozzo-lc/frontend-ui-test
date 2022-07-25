import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Button,
  IconButton,
  useTheme,
  Divider,
  Grid,
} from '@material-ui/core';
import {
  NavigateNext,
  ArrowBack,
  MoreVert,
  MapOutlined,
  TableChartOutlined,
} from '@material-ui/icons';
import CartTabs from '../common/CartoTabs';
import SvgIconStyle from './SvgIconStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
  },
  topActionsRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionBtn: {
    color: theme.palette.text.secondary,
  },
  breadcrumbsRoot: {},
  pageHeaderRoot: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    '& > div': {
      marginBottom: 15,
    },
  },
  metaList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    '& div': {
      position: 'relative',
      marginRight: 24,
      fontWeight: theme.typography.fontWeightRegular,
    },
    '& div:first-child': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& > span': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.text.primary,
      },
    },
    '& div:nth-child(n+3)': {
      color: theme.palette.text.secondary,
    },
    '& div:after': {
      position: 'absolute',
      top: '50%',
      bottom: 0,
      right: -12,
      content: '""',
      width: 1,
      height: 1,
      borderRadius: 1,
      display: 'block',
      border: `solid 1px ${theme.palette.text.primary}`,
    },
    '& div:last-child:after': {
      display: 'none',
    },
  },
  metaMap: {
    borderLeft: `solid 1px ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 22,
  },
  gridRoot: {
    width: 'fit-content',
    // '& svg': {
    //   margin: theme.spacing(1.5),
    // },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
    '& button': {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  tabRoot: {
    width: '100%',
    height: '100%',
  },
}));

export default function PageContent() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Box className={classes.topActionsRoot}>
        <div>
          <IconButton
            className={classes.actionBtn}
            disableRipple
            disableFocusRipple
            edge='start'
          >
            <ArrowBack />
          </IconButton>
        </div>
        <div>
          <Grid
            container
            alignItems='center'
            className={classes.gridRoot}
            spacing={4}
          >
            <Button
              size='medium'
              color='primary'
              startIcon={
                <SvgIconStyle
                  color={theme.palette.primary.main}
                  src={`/frontend-ui-test/assets/icons/top-actions/ic_cmap.svg`}
                />
              }
            >
              Create map
            </Button>
            <Button
              size='medium'
              color='primary'
              startIcon={
                <SvgIconStyle
                  color={theme.palette.primary.main}
                  src={`/frontend-ui-test/assets/icons/top-actions/ic_tileset.svg`}
                />
              }
            >
              Create tileset
            </Button>
            <Button
              size='medium'
              color='primary'
              startIcon={
                <SvgIconStyle
                  color={theme.palette.primary.main}
                  src={`/frontend-ui-test/assets/icons/top-actions/ic_enrich.svg`}
                />
              }
            >
              Enrich table
            </Button>
            <Divider orientation='vertical' flexItem />
            <IconButton className={classes.actionBtn}>
              <MoreVert />
            </IconButton>
          </Grid>
        </div>
      </Box>

      <Box className={classes.breadcrumbsRoot}>
        <Breadcrumbs
          aria-label='breadcrumb'
          separator={<NavigateNext fontSize='small' />}
        >
          <Link color='inherit' href='#'>
            Data explorer
          </Link>
          <Link color='inherit' href='#'>
            bgconn
          </Link>
          <Link color='inherit' href='#'>
            cartabq
          </Link>
          <Typography color='textPrimary'>dataset</Typography>
        </Breadcrumbs>
      </Box>

      <Box className={classes.pageHeaderRoot}>
        <div>
          <Typography variant='h6' color='textPrimary'>
            riskanalysis_railroad_accidents
          </Typography>
        </div>
        <Box display='flex' justifyContent='flex-start' alignItems='center'>
          <div className={classes.metaList}>
            <Typography variant='caption' component='div'>
              <TableChartOutlined style={{ marginRight: 5 }} />
              <span>Table</span>
            </Typography>
            <Typography variant='caption' component='div'>
              BigQuery
            </Typography>
            <Typography variant='caption' component='div'>
              320M Rows
            </Typography>
            <Typography variant='caption' component='div'>
              7.6 MB
            </Typography>
            <Typography variant='caption' component='div'>
              2 Weeks ago
            </Typography>
          </div>
          <div className={classes.metaMap}>
            <MapOutlined style={{ marginRight: 8 }} />
            <Typography variant='caption' component='div'>
              2
            </Typography>
          </div>
        </Box>
      </Box>

      <Box className={classes.tabRoot}>
        <CartTabs />
      </Box>
    </Box>
  );
}
