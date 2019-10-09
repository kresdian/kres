
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    <br/><br/>
        <div class="gcse-search"></div>     
     <br/><br/><br/>
      </Paper>
    </div>
  );
}
 

export default Icons;



