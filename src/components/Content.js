import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import Namebar from './Namebar';
import Messages from './Messages';

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
  const { messages, page } = props;
  const classes = useStyles();
  const [chat, setChat] = useState(false);

  useEffect(() => {
    
    setChat(messages.filter(msg => msg.id === parseInt(page))[0]);

  }, [messages, page]);

  return (chat &&
    <Container maxWidth="lg" className={classes.container}>
      
      <Namebar users={chat.users}/>
      <Messages content={chat.content}/>

    </Container>
  );
}