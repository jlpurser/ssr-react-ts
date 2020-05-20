import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/components/Routes';

export default function renderer(req: Request): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR React App</title>
      </head>
      <body>
        <div id="app">${renderToString(
          <StaticRouter location={req.path} context={{}}>
            <Routes />
          </StaticRouter>
        )}</div>
        <script async defer src="bundle.js"></script>
      </body>
    </html>
  `;
}
