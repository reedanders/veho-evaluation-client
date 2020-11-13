import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Landing(props) {
  const classes = useStyles();

  // Get page value from router
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [selectedChat, setselectedChat] = useState(page);

  const getUsers = users => {
    return users.length > 1 ? users[0].user + ', ...' : users[0].user;
  };

  const handleChange = (id) => {
    history.push(`/${id}`);
    setselectedChat(id);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />

          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <List className={classes.list}>
                {messages.map(({ id, users, content }) => (
                  <React.Fragment key={id}>
                    <ListItem button onClick={() => handleChange(id)}>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={users[0].image} />
                      </ListItemAvatar>
                      <ListItemText primary={getUsers(users)} secondary={content[0].text.substr(0, 15) + ' ... '} />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
              
            <Button variant="contained">New Conversation</Button>
          </Drawer>
        

      <Grid container>
        <Content messages={messages} page={selectedChat} />
      </Grid>

    </div>
  );
}

export default Landing;
