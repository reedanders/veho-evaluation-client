import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <React.Fragment>
      {content.map(({ id, timestamp, text}) => (
        <React.Fragment key={id}>
          <p>{timestamp}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}