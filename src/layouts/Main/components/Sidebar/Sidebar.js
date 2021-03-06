import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ForumIcon from '@material-ui/icons/Forum';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LaptopIcon from '@material-ui/icons/Laptop';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import TvIcon from '@material-ui/icons/Tv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Tv',
      href: '/tv',
      icon:  <TvIcon />
    },
    {
      title: 'Music',
      href: '/music',
      icon: <VoiceChatIcon /> 
 },
    {
      title: 'Video',
      href: '/video',
      icon: <VideoLibraryIcon />
    },
    {
      title: 'Send Wa',
      href: '/send',
      icon: <ForumIcon />
    },
  <Divider />

 

  ];




  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
           <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
