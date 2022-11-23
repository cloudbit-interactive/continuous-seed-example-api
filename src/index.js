import express from 'express';
import { config } from '../config.js';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(config.port, () => {
  console.log(`Running API server on http://localhost:${config.port}`);
})