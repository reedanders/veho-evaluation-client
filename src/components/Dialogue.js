import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export default function Dialogue(props) {
  const { onClose, open, userList } = props;
  const [targets, setTargets] = useState([]);

  const handleClose = () => {
    onClose(targets);
    setTargets([]);
  };

  const handleListItemClick = (value) => {
    setTargets([...targets, value]);
  };

  const isSelected = (user) => {
    return targets && (targets.includes(user));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>Select users</DialogTitle>
      <List>
        {userList.map((user) => (
          <ListItem
            button
            onClick={() => handleListItemClick(user)}
            key={user.user}
            selected={isSelected(user)}
          >
            <ListItemAvatar>
              <Avatar alt={user.user} src={user.image} />
            </ListItemAvatar>
            <ListItemText primary={user.user} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleClose(targets)}>
          <ListItemText primary="Start Chat" align="center"/>
        </ListItem>

      </List>
    </Dialog>
  );
}
