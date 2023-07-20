import { homePlugin } from '@backstage/plugin-home';
import { createCardExtension } from '@backstage/plugin-home-react';

export const RandomJokeHomePageComponent = homePlugin.provide(
  createCardExtension<{ defaultCategory?: 'programming' | 'any' }>({
    title: 'Random Joke',
    components: () => import('./src/homePageComponents/RandomJoke'),
  }),
);