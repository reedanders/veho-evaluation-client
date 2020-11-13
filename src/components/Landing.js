import React, { useState, useEffect } from 'react';
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
import TextField from '@material-ui/core/TextField';

import Content from './Content';

import { initMessages } from '../libs/dataLib';

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

  // Routing utils for tab navigation
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [selectedChat, setselectedChat] = useState(1);
  const [messages, setMessages] = useState(initMessages);
  const [input, setInput] = useState("");

  const getUsers = users => {
    const joinedUsers = users.map(x => x.user).join(', ');
    return joinedUsers.length > 15 ? joinedUsers.substr(0, 15) + ' ... ' : joinedUsers;
  };

  const handleChange = (id) => {
    history.push(`/${id}`);
    setselectedChat(id);
    setInput("");
  };

  function updateChat(input) {
    const index = messages.findIndex(msg => msg.id === parseInt(selectedChat));
    const newInput = {'timestamp': Date.now(), 'user': {'user': 'Reed A', 'image':'todo'}, 'text': input.input,};
    
    messages[index].content.push(newInput)

    console.log(input, index, messages[index]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await updateChat({
        input,
      });
      history.push(`/${selectedChat}`);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    
    const ids = messages.map(msg => msg.id);

    if (ids.includes(page)) {
      setselectedChat(page)
    } else {
      setselectedChat(1)
      history.push(`/${1}`);
    }

  }, []);  


  return ( selectedChat && 
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
                    <ListItem button onClick={() => handleChange(id)} selected={selectedChat === id}>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={users[0].image} />
                      </ListItemAvatar>
                      <ListItemText primary={getUsers(users)} secondary={content[0].text.substr(0, 20) + ' ... '} />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
              
            <Button variant="contained">New Conversation</Button>
          </Drawer>
        

      <Grid container direction="column">
        <Grid item>
          <Content messages={messages} page={selectedChat} />
        </Grid>
        <Grid item>
          <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <TextField 
              id="text" 
              value={input}
              variant="outlined" 
              onChange={(e) => setInput(e.target.value)}/>
            <Button
              type="submit"
              variant="contained"
              color="primary">Send
            </Button>
          </form>
        </Grid>
      </Grid>

    </div>
  );
}

export default Landing;
