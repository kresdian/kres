import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Vprofil = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Manage the Vprofil"
          title="Vprofil"
        />
        <Divider />
        <CardContent>
 


          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item xs={12}>
            
              <Typography
              variant="subtitle2"
              >
                
<p>Garangan Video adalah klien pihak ketiga ringan gratis untuk YouTube, memungkinkan Anda untuk dengan mudah menemukan video hebat dan musik gratis di seluruh dunia dan negara Anda.
</p>
* PLEASE NOTE * 
Pemain Y-Tube adalah aplikasi pihak ketiga. Semua konten disediakan oleh layanan YouTube. Karenanya Y-Tube player tidak memiliki kontrol langsung atas konten yang ditampilkan.

              </Typography>



              </Grid> </Grid>

        </CardContent> 
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Vprofil.propTypes = {
  className: PropTypes.string
};

export default Vprofil;
