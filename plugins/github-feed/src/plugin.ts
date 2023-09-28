import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const githubFeedPlugin = createPlugin({
  id: 'github-feed',
  routes: {
    root: rootRouteRef,
  },
});

export const GithubFeedPage = githubFeedPlugin.provide(
  createRoutableExtension({
    name: 'GithubFeedPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
