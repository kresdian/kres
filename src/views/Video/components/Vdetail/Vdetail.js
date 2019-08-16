import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const Vdetail = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Garangan video',
    city: 'Streaming',
    country: 'video',
    timezone: 'gratis',
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h6"
            >
              Garangan video
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body2"
            >
             Streaming video gratis
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
             
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body2">Garangan video 100% Gratis</Typography>
          <LinearProgress
            value={100}
            variant="determinate"
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

  Vdetail.propTypes = {
  className: PropTypes.string
};

export default Vdetail;
