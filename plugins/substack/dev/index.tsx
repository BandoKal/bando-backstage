import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { substackPlugin } from '../src/plugin';
import { SubstackFeedComponent } from '../src/components/SubstackFeedComponent';

createDevApp()
  .registerPlugin(substackPlugin)
  .addPage({
    element: <SubstackFeedComponent />,
    title: 'Root Page',
    path: '/substack'
  })
  .render();
