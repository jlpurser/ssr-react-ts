import express from 'express';
import config from './config';
import renderer from './utils/renderer';

const app = express();

// Serve static assets
app.use(express.static('public'));

// Render React app server side
app.get('*', (req, res) => {
  // send html document with rendered App
  res.send(renderer(req));
});

app.listen(config.port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Listening on port ${config.port}`);
  }
});
