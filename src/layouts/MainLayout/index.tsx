import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';
import navConfig from './NavConfig';
import Header from './Header';
import Navbar from './Navbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
    },
    innerRoot: {
      flex: 'auto',
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'row',
    },
    main: {
      display: 'flex',
      flexGrow: 1,
      //overflowY: 'scroll',
      flexDirection: 'column',
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    innerContent: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      flexDirection: 'row',
    },
  }),
);

export default function MainLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header navConfig={navConfig} />
      <div className={classes.innerRoot}>
        <Navbar navConfig={navConfig} />

        <main className={classes.main}>
          <div className={classes.content}>
            <div className={classes.innerContent}>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
