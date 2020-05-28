import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/components/Routes';
import { ServerStore } from '../server/state/createServerStore';

export default function renderer(req: Request, store: ServerStore): string {
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
          <Provider store={store}>
            <StaticRouter location={req.route.path} context={{}}>
              <Routes />
            </StaticRouter>
          </Provider>
        )}</div>
        <script async defer src="bundle.js"></script>
      </body>
    </html>
  `;
}
