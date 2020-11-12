import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import adamg from './assets/images/adamg.png';
import fredc from './assets/images/fredc.png';
import jamesl from './assets/images/jamesl.png';
import hamarz from './assets/images/hamarz.png';
import mylest from './assets/images/mylest.png';

const messages = [
  {
    id: 1,
    users: [{user: 'Adam G', image: adamg}],
    content: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '',
  },
  {
    id: 2,
    users: [{user: 'Fred C', image: fredc}],
    content: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    users: [{user: 'James L', image: jamesl}, {user: 'Hamar Z', image: hamarz},],
    content: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    users: [{user: 'Hamar Z', image: hamarz},],
    content: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    users: [{user: 'Myles T', image: mylest},],
    content: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
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

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Sidebar messages={messages}/>

      <main className={classes.content}>
        <Content messages={messages} />
      </main>
    </div>
  );
}

export default App;
