import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
  },
  listItem: {
    borderRadius: 6,
    '&.Mui-selected': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  addBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 24,
    height: 24,
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function SidebarContent() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box component='div' className={classes.root}>
      <Typography
        variant='subtitle1'
        color='textPrimary'
        style={{ marginBottom: 10 }}
      >
        Connections
      </Typography>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <SvgIcon style={{ borderRadius: 4 }}>
              <rect width='24' height='24' rx='4' fill='#fff' />
              <path fill='#036FE2' d='M0 0h24v24H0z' />
              <path
                opacity='.2'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.957 21c4.946 0 8.956-4.03 8.956-9s-4.01-9-8.956-9C7.01 3 3 7.03 3 12s4.01 9 8.957 9Z'
                fill='#fff'
              />
              <path
                d='M11.957 15a2.993 2.993 0 0 0 2.986-3c0-1.657-1.337-3-2.986-3a2.993 2.993 0 0 0-2.986 3c0 1.657 1.337 3 2.986 3Z'
                fill='#fff'
              />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary='CARTO Data Warehouse' />
        </ListItem>
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <SvgIcon style={{ borderRadius: 4 }}>
              <rect width='24' height='24' rx='4' fill='#fff' />
              <path fill='#669DF6' d='M0 0h24v24H0z' />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.193 10.96v1.775c.28.482.676.886 1.154 1.175v-2.95H8.193Zm2.132-1.633v5.082c.249.032.5.045.75.04.225.014.45.014.675 0V9.328h-1.425v-.001Zm2.532 2.328v2.22c.48-.305.874-.728 1.147-1.228v-.992h-1.147Zm2.767 3.01-.959.959a.283.283 0 0 0 0 .405l2.39 2.39c.11.108.288.108.398 0l.965-.966a.283.283 0 0 0 0-.398l-2.39-2.39a.282.282 0 0 0-.404 0'
                fill='#fff'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.075 5a6.075 6.075 0 1 0 0 12.15 6.075 6.075 0 0 0 0-12.15Zm0 10.59a4.509 4.509 0 1 1-.12-9.017 4.509 4.509 0 0 1 .12 9.017'
                fill='#fff'
              />{' '}
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary='bqconn' />
        </ListItem>
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <SvgIcon style={{ borderRadius: 4 }}>
              <rect width='24' height='24' rx='4' fill='#fff' />
              <path fill='#29B5E8' d='M0 0h24v24H0z' />
              <path
                d='M9.508 12.379a.978.978 0 0 0-.17-.913 1.003 1.003 0 0 0-.3-.254L5.544 9.244a1.043 1.043 0 0 0-1.406.368.987.987 0 0 0 .376 1.37l1.954 1.102-1.954 1.098a.989.989 0 0 0-.376 1.373c.283.479.913.643 1.406.366l3.496-1.97c.235-.132.396-.34.47-.572h-.002Zm.95 1.844a1.04 1.04 0 0 0-.599.13L6.361 16.32a.994.994 0 0 0-.376 1.374c.285.48.914.645 1.405.366l1.96-1.102v2.202c0 .555.46 1.005 1.03 1.005.568 0 1.03-.45 1.03-1.005v-3.936c0-.529-.42-.963-.953-1v-.001Zm3.581-4.28c.2.017.41-.025.597-.13l3.497-1.97a.992.992 0 0 0 .377-1.372 1.043 1.043 0 0 0-1.405-.367l-1.959 1.104V5.004c0-.554-.46-1.004-1.03-1.004-.57 0-1.03.45-1.03 1.004v3.937c0 .528.42.963.953 1.001v.001Zm-7.678-2.1 3.498 1.97c.188.105.397.147.598.13.532-.038.953-.473.953-1V5.004C11.41 4.45 10.948 4 10.38 4c-.57 0-1.03.45-1.03 1.004v2.203L7.39 6.104a1.043 1.043 0 0 0-1.405.367.992.992 0 0 0 .376 1.373v-.001Zm6.574 4.232a.297.297 0 0 0-.077-.179l-.42-.408a.301.301 0 0 0-.183-.074h-.016a.298.298 0 0 0-.18.074l-.422.408a.29.29 0 0 0-.075.18v.015c0 .057.033.136.075.177l.42.41c.042.04.123.074.182.074h.016a.3.3 0 0 0 .182-.074l.421-.41a.289.289 0 0 0 .077-.177v-.016Zm1.162.393-1.453 1.416a.293.293 0 0 1-.183.076h-.427a.3.3 0 0 1-.183-.076l-1.453-1.416a.283.283 0 0 1-.075-.176v-.418c0-.057.033-.138.075-.178l1.453-1.416a.297.297 0 0 1 .183-.074h.427c.06 0 .141.032.183.074l1.453 1.416c.042.04.076.12.076.178v.418a.282.282 0 0 1-.076.176Zm4.036 3.852-3.497-1.966a1.03 1.03 0 0 0-.597-.131 1.013 1.013 0 0 0-.952 1v3.937c0 .555.46 1.005 1.03 1.005.57 0 1.03-.45 1.03-1.005v-2.202l1.958 1.102a1.041 1.041 0 0 0 1.405-.366.993.993 0 0 0-.377-1.374Zm1.85-5.338-1.955 1.102 1.953 1.098a.99.99 0 0 1 .377 1.373 1.044 1.044 0 0 1-1.406.366l-3.498-1.97a1 1 0 0 1-.477-1.136 1.01 1.01 0 0 1 .477-.603l3.498-1.968a1.044 1.044 0 0 1 1.406.368.989.989 0 0 1-.377 1.37h.002Z'
                fill='#fff'
              />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary='sfcon-_test' />
        </ListItem>
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <Box className={classes.addBtn}>
              <AddCircleOutlineIcon style={{ fontSize: 18 }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary='Add new connections'
            primaryTypographyProps={{
              variant: 'subtitle2',
              color: 'textSecondary',
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
}
