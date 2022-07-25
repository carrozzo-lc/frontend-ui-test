import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Typography,
} from '@material-ui/core';
import SvgIconStyle from './SvgIconStyle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listRoot: {
      marginBottom: 15,
    },
    listItem: {
      paddingLeft: 13,
    },
  }),
);

export default function MainNavigation({ navConfig, isOpen }: any) {
  const classes = useStyles();

  return (
    <>
      <List className={classes.listRoot}>
        {navConfig.map((item: any, index: number) => {
          return (
            <ListItem
              className={classes.listItem}
              button
              key={`item-${item.title}-${index}`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  variant: 'caption',
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component='div'>
            <Typography variant='overline'>
              {isOpen ? 'Go Beyond' : <div style={{ height: 48 }}></div>}
            </Typography>
          </ListSubheader>
        }
      >
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <SvgIconStyle
              src={`/frontend-ui-test/assets/icons/navbar/ic_developers.svg`}
              sx={{ width: 1, height: 1 }}
            />
          </ListItemIcon>
          <ListItemText
            primary='Developers'
            primaryTypographyProps={{
              variant: 'caption',
            }}
          />
        </ListItem>
      </List>
    </>
  );
}
