

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
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
<script async src="https://cse.google.com/cse.js?cx=014391522214403407077:7d0gelgeawr"></script>
<div class="gcse-search"></div>


        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
<form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
 <div>
    <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
    <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
   <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" />
 </div>
</form>

      </Paper>
    </div>
  );
}


export default Icons;



