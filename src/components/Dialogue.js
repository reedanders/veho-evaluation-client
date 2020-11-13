import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, userList } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Select users</DialogTitle>
      <List>
        {userList.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user)} key={user.user}>
            <ListItemAvatar>
              <Avatar alt={user.user} src={user.image} />
            </ListItemAvatar>
            <ListItemText primary={user.user} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}