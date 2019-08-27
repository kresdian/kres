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
                
<p>Garangan Music adalah web streaming musik yang luar biasa yang memberikan pengalaman hebat streaming tanpa batas dari lagu-lagu SoundCloud MP3 secara gratis.
</p><br/>
<p><b>
Streaming music SoundCloud</b>
 <br/>

- Cari musik online gratis melalui jutaan MP3
 <br/>

- Artis SoundCloud Top & dengarkan album top
<br/>- Mainkan musik online berdasarkan genre
<br/>- Dengarkan musik dengan daftar putar
<br/>- Mainkan musik online gratis dalam mode latar belakang

</p>
<br/><b>Catatan</b>
<br/>
Semua content lagu yang ada di Garangan Musik ini diambil dari SoundCloud API yang mematuhi persyaratan penggunaan.
<br/>Garangan Musik BUKAN pengunduh musik<br/> tidak dapat mengunduh musik<br/>tidak dapat memutar offline kecuali musik lokal.
<br/>Klien asli SoundCloud®: https://play.google.com/store/apps/details?id=com.soundcloud.android<br/>
<b>Terima kasih</b>
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
