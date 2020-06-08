import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import Routes from '../client/components/Routes';
import { ServerStore } from '../server/state/serverStore';

/**
 * Returns HTML string of React app with preloaded store
 *
 * @param req Express Request object
 * @param store Redux Server Store
 */
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
            <StaticRouter location={req.path} context={{}}>
              {renderRoutes(Routes)}
            </StaticRouter>
          </Provider>
        )}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script async defer src="bundle.js"></script>
      </body>
    </html>
  `;
}
