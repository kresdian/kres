

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Icons() {
  const classes = useStyles();


return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
<script async src="https://cse.google.com/cse.js?cx=014391522214403407077:7d0gelgeawr"></script>
<div class="gcse-search"></div>


        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}


export default Icons;



