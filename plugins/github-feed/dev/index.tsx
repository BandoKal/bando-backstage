import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { githubFeedPlugin } from '../src/plugin';
import { GithubFeedComponent } from '@internal/plugin-github-feed/src/components/GithubFeedComponent';


createDevApp()
  .registerPlugin(githubFeedPlugin)
  .addPage({
    element: <GithubFeedComponent searchKey='aws' />,
    title: 'Root Page',
    path: '/github-feed'
  })
  .render();
