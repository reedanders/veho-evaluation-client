import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Sidebar from './Sidebar';
import Content from './Content';

import adamg from '../assets/images/adamg.png';
import fredc from '../assets/images/fredc.png';
import jamesl from '../assets/images/jamesl.png';
import hamarz from '../assets/images/hamarz.png';
import mylest from '../assets/images/mylest.png';

const messages = [
  {
    id: 1,
    users: [{user: 'Adam G', image: adamg}],
    content: [{timestamp: 111111, user: {user: 'Adam G', image: adamg}, text: "I'll be in the neighbourhood this week. Let's grab a bite to eat"}],
  },
  {
    id: 2,
    users: [{user: 'Fred C', image: fredc}],
    content: [{timestamp: 222222, user: {user: 'Fred C', image: fredc}, text: "I'll be in the neighbourhood this week. Let's grab a bite to eat"}],
  },
  {
    id: 3,
    users: [{user: 'James L', image: jamesl}, {user: 'James L', image: hamarz},],
    content: [{timestamp: 333333, user: {user: 'Adam G', image: adamg}, text: "I'll be in the neighbourhood this week. Let's grab a bite to eat"}],
  },
  {
    id: 4,
    users: [{user: 'Hamar Z', image: hamarz},],
    content: [{timestamp: 444444, user: {user: 'Hamar Z', image: hamarz}, text: "I'll be in the neighbourhood this week. Let's grab a bite to eat"}],
  },
  {
    id: 5,
    users: [{user: 'Myles T', image: mylest},],
    content: [{timestamp: 555555, user: {user: 'Myles T', image: mylest}, text: "I'll be in the neighbourhood this week. Let's grab a bite to eat"}],
  },
];


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

function Landing(props) {
  const classes = useStyles();

  // Get page value from router
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [selectedChat, setselectedChat] = useState(page);


  return (
    <div className={classes.root}>
      <CssBaseline />

      <Sidebar messages={messages}/>

      <main className={classes.content}>
        <Content messages={messages} page={selectedChat} />
      </main>
    </div>
  );
}

export default Landing;
