import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Sidebar />

      <main className={classes.content}>
        <Content />
      </main>
    </div>
  );
}

export default App;
