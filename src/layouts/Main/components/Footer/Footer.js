import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
      <small>
    <NavLink to="/tv">Tv</NavLink>
       <NavLink to="/music">Musik</NavLink>
        <NavLink to="/video">Video</NavLink>
      <NavLink to="/send">Send Wa</NavLink>
     </small>

      <Typography variant="body1">


        &copy;{' '}
        <Link
          component="a"
          href="https://www.instagram.com/kres_008"
          target="_blank"
        >
          Kres_008
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
</Paper>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
