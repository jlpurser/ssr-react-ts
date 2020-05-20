import React from 'react';
import { renderToString } from 'react-dom/server';

export default function renderer(Component: React.ComponentType): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR React App</title>
      </head>
      <body>
        <div id="app">${renderToString(<Component />)}</div>
        <script async defer src="bundle.js"></script>
      </body>
    </html>
  `;
}
