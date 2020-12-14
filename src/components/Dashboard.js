import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav'
import SideBar from './SideBar'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Touch me not.
        </Typography>
      </main>
    </div>
  );
}
