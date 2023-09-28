import { githubFeedPlugin } from './plugin';

describe('github-feed', () => {
  it('should export plugin', () => {
    expect(githubFeedPlugin).toBeDefined();
  });
});
