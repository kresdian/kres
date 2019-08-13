
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import TvIcon from '@material-ui/icons/Tv';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import NearMeIcon from '@material-ui/icons/NearMe';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.white.dark
  },
  differenceValue: {
    color: theme.palette.white.dark,
    marginRight: theme.spacing(1)
  }
}));

const TasksProgress = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
            >
           <NavLink to="/tv">Garangan Video</NavLink>
            </Typography>
            <Typography variant="body2">Streaming video</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <TvIcon />
    </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
        
<NavLink to="/tv">
        
  <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png"/></NavLink>
            <Typography
            className={classes.captionValue}
            variant="h6"
          >
            <NavLink to="/tv">Detail</NavLink>
           
          </Typography>
          <Typography
            className={classes.caption}
            variant="h6"
          >
            &emsp; &emsp;
          </Typography>
&emsp;
<NavLink to="/video">
        
  <NearMeIcon className={classes.differenceIcon} /></NavLink>
         
         <Typography
            className={classes.differenceValue}
            variant="h6"
          >
            <a href="http://send.yplay.online">Buka</a>
           
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;





