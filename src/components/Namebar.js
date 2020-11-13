import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  },
}));

export default function Namebar(props) {
  const { users } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Avatar alt={users.user} src={users[0].image} />
          <Typography variant="h6" className={classes.title}>
            {users.map((x) => x.user).join(", ")}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
