import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { cors_origin } from './config'

const app: Express = express();

app.use(
  cors({
    origin: cors_origin,
    credentials: true
  })
);

app.use(express.static('public'));

app.get('/api/tournaments', async (req: Request, res: Response) => {
  const resp = await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json();

  res.json(resp);
});

app.get('/api/tournament/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const resp = await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json();

  res.json(resp);
});

app.get('/api/tips', async (req: Request, res: Response) => {
  const resp = await (await fetch('https://fftbg.com/api/tips')).json();

  res.json(resp);
});

const server = app.listen(3003, () => {
  console.log('Listening on port 3003');
});


process.on('SIGTERM', () => {
  server.close();
  process.exit();
});
