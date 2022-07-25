import { lazy, useState, useEffect, ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Tabs, Tab } from '@material-ui/core';

const MapContainer = lazy(
  () =>
    import(
      /* webpackChunkName: 'map-container' */ 'components/views/main/MapContainer'
    ),
);

interface TabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: '100%', height: '100%' }}
    >
      {value === index && (
        <Box width='100%' height='100%'>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any): { id: string; 'aria-controls': string } {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
  },
  tabHead: {
    marginBottom: theme.spacing(4),
    borderBottom: `solid 1px ${theme.palette.divider}`,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Manually trigger the updateIndicator method.
    window.dispatchEvent(new CustomEvent('resize'));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.tabHead}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Map' {...a11yProps(0)} />
          <Tab label='Data preview' {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <MapContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Data Preview
      </TabPanel>
    </div>
  );
}
