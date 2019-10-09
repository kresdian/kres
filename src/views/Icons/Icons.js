import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
<script async src="https://cse.google.com/cse.js?cx=014391522214403407077:7d0gelgeawr"></script>
<div class="gcse-search"></div>


</div>
    </div>
  );
};

export default Icons;
