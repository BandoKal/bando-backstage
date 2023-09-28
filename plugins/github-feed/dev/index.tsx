import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { githubFeedPlugin, GithubFeedPage } from '../src/plugin';

createDevApp()
  .registerPlugin(githubFeedPlugin)
  .addPage({
    element: <GithubFeedPage />,
    title: 'Root Page',
    path: '/github-feed'
  })
  .render();
