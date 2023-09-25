import { Router } from 'express';
import express from 'express';
import Parser from 'rss-parser';


export default async function createPlugin(
): Promise<Router> {
  const router = express.Router();
  const parser = new Parser();

  router.get('/feed', async (_, res) => {

    const feed = await parser.parseURL('https://jasonbandy.substack.com/feed');

    res.send(feed);
  });

  return router;
}