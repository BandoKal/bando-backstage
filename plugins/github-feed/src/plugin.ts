import { createPlugin } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const githubFeedPlugin = createPlugin({
  id: 'github-feed',
  routes: {
    root: rootRouteRef,
  },
});

