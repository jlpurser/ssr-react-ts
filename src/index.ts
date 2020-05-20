import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';
import config from './config';
import path from 'path';

const app = express();

// Serve static assets
app.use(express.static('public'));

// Render React app server side
app.get('/', (req, res) => {
  // send html document with rendered App
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <div id="app">
            ${renderToString(React.createElement(Home))}
           </div>
           <script async defer src="bundle.js"></script>
        </body>
      </html>
  `);
});

app.listen(config.port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Listening on port ${config.port}`);
  }
});
