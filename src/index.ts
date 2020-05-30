import express from 'express';
import env from './config';
import createStore from './server/state/createServerStore';
import renderer from './utils/renderer';

const app = express();

// Serve static assets
app.use(express.static('public'));

// Render React app server side
app.get('*', (req, res) => {
  // send html document with rendered App
  res.send(renderer(req, createStore()));
});

app.listen(env.get('port'), () => {
  if (env.get('nodeEnv') !== 'production') {
    console.log(`Listening on port ${env.get('port')}`);
  }
});
