import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Content() {
  const classes = useStyles();
  

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar position="static">
        <p>name</p>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
            <p>chat</p>
        </Grid>
      </Grid>
    </Container>
  );
}