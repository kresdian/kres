import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import TvIcon from '@material-ui/icons/Tv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


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
      <img src="https://garangan.online/images/dev.png" width="100" height="35"/>

<MenuList>
        <MenuItem>
          <ListItemIcon>
            <TvIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit"><NavLink to="/tv">Garangan Tv</NavLink><br/>
  </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit"><NavLink to="/music">Garangan Musik</NavLink><br/>
       </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <VoiceChatIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
           <NavLink to="/video">Garangan Video</NavLink><br/>
     
          </Typography>
        </MenuItem>
      </MenuList>




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

Suport Browser <img src="https://img.icons8.com/plasticine/30/000000/chrome.png"/>
<img src="https://img.icons8.com/dusk/30/000000/firefox.png"/>
<img src="https://img.icons8.com/dusk/30/000000/opera.png"/>
</Paper>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
