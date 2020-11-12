import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Namebar from './Namebar';
import Messages from './Messages';

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

export default function Content(props) {
  const { messages } = props;
  const classes = useStyles();
  

  return (
    <Container maxWidth="lg" className={classes.container}>
      
      <Namebar users={messages.users}/>
      
      <Messages users={messages.content}/>

    </Container>
  );
}