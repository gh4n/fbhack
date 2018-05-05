import React, { Component } from 'react';

// Material UI Mext Components
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Images
import Logo from '../../images/sample.jpg';

import withAuthorization from '../Session/withAuthorization';

class HomePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <Typography variant="subheading" style={{ fontSize: 12, textTransform: 'uppercase', fontWeight: 300, lineHeight: '19px' }}>
            April 14, 2018
          </Typography>
          <Typography variant="title" style={{ fontSize: 16, textTransform: 'uppercase', fontWeight: 400, lineHeight: '19px', letterSpacing: '0.5px', paddingBottom: 14 }}>
            user / grace.han
          </Typography>
          <img src={Logo} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={4}>

        </Grid>
      </Grid>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);