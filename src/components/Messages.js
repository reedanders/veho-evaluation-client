import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Messages(props) {
  const { content } = props;
  const classes = useStyles();
  const [chat, setChat] = useState(content)

  return (
    <React.Fragment>
      {chat.map(({ id, timestamp, text}) => (
        <React.Fragment key={id}>
          <p>{timestamp}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}