import React from 'react';
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { XkcdComicCard } from 'backstage-plugin-xkcd';
import { HomePageRandomJoke } from '@backstage/plugin-home';
import { SubstackFeedComponent } from '@internal/plugin-substack/src/components/SubstackFeedComponent';
import { AWSFeedComponent } from '@internal/plugin-aws-feed-plugin/src/components/AWSFeedComponent';



export const homePage = (
    <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
                Hey thanks for visiting my site! This is an example site built with Backstage. Which is an internal developer portal that you can build for your company.
            </Typography>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item></Grid>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs={4} md={5}>
                    <Stack spacing={2}>
                        <HomePageRandomJoke />
                        <AWSFeedComponent />
                    </Stack>
                </Grid>
                <Grid item xs={8} md={7}>
                    <Stack spacing={2}>
                        <SubstackFeedComponent />
                        <XkcdComicCard />
                    </Stack>
                </Grid>

            </Grid>
        </Grid>
    </Grid>
);

