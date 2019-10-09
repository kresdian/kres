

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


const Icons = () => {
  const classes = useStyles();

return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.

        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>


  
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>Search</Paper>
        </div>
  
  <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}><div class="gcse-search"></div>
</Paper>
        </div>
  
  </Paper>
    </div>
  );
}


export default Icons;



