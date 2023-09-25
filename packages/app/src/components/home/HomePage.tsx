import React from 'react';
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { XkcdComicCard } from 'backstage-plugin-xkcd';
import { HomePageRandomJoke } from '@backstage/plugin-home';
import { SubstackFeedComponent } from '@internal/plugin-substack/src/components/SubstackFeedComponent';
import { GithubFeedComponent } from '@internal/plugin-aws-feed-plugin/src/components/AWSFeedComponent';

const spacing = 2;

export const homePage = (
    <Grid container spacing={spacing}>
        <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div" paddingLeft={spacing} >
                Open source developer portal. Powered by Backstage. Implemented by  <Link href="https://github.com/BandoKal">Bandokal</Link>
            </Typography>
        </Grid>

        <Grid container xs spacing={spacing}>
            <Grid item xs={6} md={8}>
                <Stack spacing={spacing} paddingLeft={spacing}>
                    <GithubFeedComponent searchKey="aws" />
                    <GithubFeedComponent searchKey="azure" />
                    <GithubFeedComponent searchKey="gcp" />
                </Stack>
            </Grid>
            <Grid item xs={6} md={4} spacing={spacing}>
                <Stack spacing={spacing}>
                    <HomePageRandomJoke />
                    <XkcdComicCard />
                    <SubstackFeedComponent />
                </Stack>
            </Grid>
        </Grid>
    </Grid>
);

