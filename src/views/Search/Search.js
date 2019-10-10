
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


const Search = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
    <br/><br/><br/><center><img src="https://image.flaticon.com/icons/svg/1998/1998767.svg" height="70" width="70"/><br/><b>Garangan Search</b></center>
        <div class="gcse-search"></div>     
     <br/><br/><br/> <br/><br/><br/>
      </Paper>
    </div>
  );
}
 

export default Search;



