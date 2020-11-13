import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paperUser: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
  paperGuest: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  captionUser: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: theme.palette.text.secondary,
  },
  captionGuest: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.palette.text.secondary,
  }
}));

const formatDate = (time) => {
  const d = new Date(time);
  return d.toDateString();
}

export default function Messages(props) {
  const { timestamp, text, user } = props;
  const classes = useStyles();

  return (
      (user.user === 'Reed A' ? 

      <Grid container justify="flex-end" item>
        <Grid item>
          <Paper className={classes.paperUser}>{text}</Paper>
          <Typography variant="caption" className={classes.captionUser}>
            {user.user} on {formatDate(timestamp)}
          </Typography>
        </Grid>
      </Grid>

       : 

      <Grid container justify="flex-start" item>
        <Grid item>
          <Paper className={classes.paperGuest}>{text}</Paper>
          <Typography variant="caption" className={classes.captionGuest}>
            {user.user} on {formatDate(timestamp)}
          </Typography>
        </Grid>
      </Grid>

      )
  );
}