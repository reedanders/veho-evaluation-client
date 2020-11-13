import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ChatBubble from "./ChatBubble";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Messages(props) {
  const { content } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={3}>
        {content.map(({ timestamp, text, user}) => (
            <ChatBubble key={timestamp} timestamp={timestamp} text={text} user={user}/>
        ))}
      </Grid>
    </div>
  );
}