
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import VideocamIcon from '@material-ui/icons/Videocam';
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
    backgroundColor: theme.palette.warning.main,
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
    color: theme.palette.white
  },
  differenceValue: {
    color: theme.palette.white,
    marginRight: theme.spacing(1)
  }
}));

const Yayan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
Tes
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>tes
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
              <VideocamIcon />
    </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
        
<NavLink to="/music">
        
  <BookmarksIcon /></NavLink>
            <Typography
            className={classes.captionValue}
            variant="h6"
          >
            <NavLink to="/music">Detail</NavLink>
           
          </Typography>
          <Typography
            className={classes.caption}
            variant="h6"
          >
            &emsp; &emsp;
          </Typography>
&emsp;
<NavLink to="/music">
        
  <img src="https://img.icons8.com/material-outlined/24/000000/near-me.png"/></NavLink>
         
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

Yayan.propTypes = {
  className: PropTypes.string
};

export default Yayan;

