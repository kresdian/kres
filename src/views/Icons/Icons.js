

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

        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
<script>
  
    window.__gcse || (window.__gcse = {});
    window.__gcse.searchCallbacks = {
      image: {
        starting: 'myImageSearchStartingCallbackName',
      },
      web: {
        starting: myWebSearchStartingCallback,
      },
    };
    (function() {
      const cx = '014391522214403407077:7d0gelgeawr';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  
</script>

<div class="gcse-searchbox"></div>
<div class="gcse-searchresults"></div>


      </Paper>
    </div>
  );
}


export default Icons;



