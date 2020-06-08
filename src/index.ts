import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/components/Routes';
import env from './config';
import store from './server/state/serverStore';
import renderer from './utils/renderer';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: opts => ({
      ...opts,
      header: {
        'x-forwarded-host': 'localhost:3000',
      },
    }),
  })
);

// Serve static assets
app.use(express.static('public'));

// Render React app server side
app.get('*', (req, res) => {
  Promise.all(
    matchRoutes(Routes, req.path)
      .map(({ route }) => (route.loadData ? route.loadData(store) : null))
      .filter(promise => promise)
  ).then(() => {
    // send html document with rendered App
    res.send(renderer(req, store));
  });
});

app.listen(env.get('port'), () => {
  if (env.get('nodeEnv') !== 'production') {
    console.log(`Listening on port ${env.get('port')}`);
  }
});
