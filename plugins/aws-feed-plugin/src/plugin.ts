import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const awsFeedPluginPlugin = createPlugin({
  id: 'aws-feed-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const AwsFeedPluginPage = awsFeedPluginPlugin.provide(
  createRoutableExtension({
    name: 'AwsFeedPluginPage',
    component: () =>
      import('./components/AWSFeedComponent').then(m => m.GithubFeedComponent),
    mountPoint: rootRouteRef,
  }),
);
