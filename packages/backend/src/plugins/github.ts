import { Router } from 'express';
import express from 'express';
import request from 'request';

export default async function createPlugin(
): Promise<Router> {
    const router = express.Router();

    router.get('/aws', async (_, res) => {


        request('https://api.github.com/search/repositories?q=topic:aws&per_page=5',
            { headers: { 'User-Agent': 'Mozilla/5.0' } },
            (error, _, body) => {
                if (error) {
                    console.error(error);
                } else {

                    res.send(body);
                }
            });
    });

    router.get('/azure', async (_, res) => {


        request('https://api.github.com/search/repositories?q=topic:azure&per_page=5',
            { headers: { 'User-Agent': 'Mozilla/5.0' } },
            (error, _, body) => {
                if (error) {
                    console.error(error);
                } else {

                    res.send(body);
                }
            });
    });

    router.get('/gcp', async (_, res) => {


        request('https://api.github.com/search/repositories?q=topic:gcp&per_page=5',
            { headers: { 'User-Agent': 'Mozilla/5.0' } },
            (error, _, body) => {
                if (error) {
                    console.error(error);
                } else {

                    res.send(body);
                }
            });
    });

    return router;
}