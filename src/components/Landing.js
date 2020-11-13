import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Content from "./Content";
import Dialogue from "./Dialogue";

import { initMessages, gibberish, userList } from "../libs/dataLib";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    minHeight: "90vh", //not ideal, replace with flexbox
  },
  list: {
    minHeight: "90vh", //not ideal, replace with flexbox
  },
  listButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  input: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function Landing(props) {
  const classes = useStyles();

  // Routing utils for tab navigation
  const { history } = props;

  const [selectedChat, setselectedChat] = useState(1);
  const [messages, setMessages] = useState(initMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = React.useState(false);

  function randomDelay() {
    return Math.floor(60000 * Math.random());
  }

  function validateForm() {
    return (
      input.charAt(0).toUpperCase() === input.charAt(0) &&
      !!input.slice(-1).match(/^[.!?]/)
    );
  }

  const getUsers = (users) => {
    const joinedUsers = users
      .map((x) => x.user.split(" ")[0] + " " + x.user.split(" ")[1][0] + ".")
      .join(", ");
    return joinedUsers.length > 15
      ? joinedUsers.substr(0, 15) + " ... "
      : joinedUsers;
  };

  const clipText = (content) => {
    if (content[0].text) {
      return content[0].text.substr(0, 20) + " ... ";
    } else {
      return content.length > 1 ? content[1].text.substr(0, 20) + " ... " : "";
    }
  };

  const handleChange = (id) => {
    history.push(`/${id}`);
    setselectedChat(id);
    setInput("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    addChat(value);
  };

  const addChat = (user) => {
    const id = messages.length + 1;
    const newChat = {
      id: id,
      users: user,
      content: [
        {
          timestamp: Date.now(),
          user: { user: "Reed A", image: "todo" },
          text: "",
        },
      ],
    };
    setselectedChat(id);
    messages.push(newChat);
  };

  const updateMessages = (input, index, id) => {
    const newMessages = messages;
    newMessages[index].content.push(input);
    setMessages(newMessages);
    history.push(`/${id}`);
  };

  function updateChat(input) {
    const index = messages.findIndex(
      (msg) => msg.id === parseInt(selectedChat)
    );
    const newInput = {
      timestamp: Date.now(),
      user: { user: "Reed A", image: "todo" },
      text: input.input,
    };

    updateMessages(newInput, index, selectedChat);
  }

  function createResponse() {
    setTimeout(() => {
      const index = messages.findIndex(
        (msg) => msg.id === parseInt(selectedChat)
      );
      const gibber = gibberish[Math.floor(Math.random() * gibberish.length)];
      const newInput = {
        timestamp: Date.now(),
        user: {
          user: messages[index].users[0].user,
          image: messages[index].users[0].image,
        },
        text: gibber,
      };

      updateMessages(newInput, index, selectedChat);
    }, randomDelay());
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await updateChat({
        input,
      });
      history.push(`/${selectedChat}`);
      setInput("");

      await createResponse();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setselectedChat(1);
    history.push(`/${1}`);
  }, [history]);

  return (
    selectedChat && (
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
                <ListItem
                  button
                  onClick={() => handleChange(id)}
                  selected={selectedChat === id}
                >
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={users[0].image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={getUsers(users)}
                    secondary={clipText(content)}
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>

          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            className={classes.listButton}
          >
            New Conversation
          </Button>
          <Dialogue
            open={open}
            onClose={handleClose}
            userList={userList}
          />
        </Drawer>

        <Grid container direction="column">
          <Grid item className={classes.content}>
            <Content messages={messages} page={selectedChat} />
          </Grid>
          <Grid item>
            <form className={classes.input} noValidate onSubmit={handleSubmit}>
              <TextField
                id="text"
                value={input}
                variant="outlined"
                label="Enter a new message as a complete sentence."
                fullWidth
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!validateForm()}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    )
  );
}

export default Landing;
