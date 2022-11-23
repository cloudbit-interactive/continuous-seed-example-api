import express from 'express';
import { config } from '../config.js';

const app = express();
app.get('/ping', (req, res) => {
  res.send('pong');
})

app.get('/test', (req, res) => {
  res.send('test api response');
})


app.get('/', (req, res) => {
  res.send(JSON.stringify(config, null, 2));
})

app.listen(config.port, () => {
  console.log(`Running API server on http://localhost:${config.port}`);
})
