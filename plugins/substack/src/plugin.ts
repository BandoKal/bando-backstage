import { createPlugin } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const substackPlugin = createPlugin({
  id: 'substack',
  routes: {
    root: rootRouteRef,
  },
});

