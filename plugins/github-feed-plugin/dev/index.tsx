import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { githubFeedPlugin } from '../src/plugin';
import GithubFeedComponent from '../src/components/AWSFeedComponent';

createDevApp()
  .registerPlugin(githubFeedPlugin)
  .addPage({
    element: <GithubFeedComponent searchKey='aws'/>,
    title: 'Root Page',
    path: '/aws-feed-plugin'
  })
  .render();
