import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import navConfig from './NavConfig';
import Header from 'components/common/Header';
import Navbar from 'components/common/Navbar';

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

export default function MainLayout({ children }: { children: JSX.Element }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header navConfig={navConfig} />
      <div className={classes.innerRoot}>
        <Navbar navConfig={navConfig} />

        <main className={classes.main}>
          <div className={classes.content}>
            <div className={classes.innerContent}>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
