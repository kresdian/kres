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
      <img src="https://garangan.online/images/dev.png" width="150" height="40"/>

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
        2019
<Link
          component="a"
          href="https://www.instagram.com/kres_008"
          target="_blank"
        >
          Kres_008
        </Link>
        
      </Typography>
     
<br/>
<small>Supported browser</small><br/>
<img src="https://img.icons8.com/color/30/000000/chrome--v1.png"/>
<img src="https://img.icons8.com/color/30/000000/firefox.png"/>
<img src="https://img.icons8.com/color/30/000000/opera--v2.png"/>
<img src="https://img.icons8.com/color/30/000000/safari--v1.png"/>
</Paper>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
