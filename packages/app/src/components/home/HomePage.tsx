import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RandomJokeHomePageComponent } from './RandomJokeHomePageComponent';

export const homePage = (
    <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <RandomJokeHomePageComponent />
    </Grid>
  </Grid>
);

