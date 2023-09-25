import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { awsFeedPluginPlugin, AwsFeedPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(awsFeedPluginPlugin)
  .addPage({
    element: <AwsFeedPluginPage />,
    title: 'Root Page',
    path: '/aws-feed-plugin'
  })
  .render();
