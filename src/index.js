import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';
import config from './config';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(config.port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Listening on port ${config.port}`);
  }
});
