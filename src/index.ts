import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { PORT, CORS_ORIGIN } from './config'

const app: Express = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
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

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


process.on('SIGTERM', () => {
  server.close();
  process.exit();
});
