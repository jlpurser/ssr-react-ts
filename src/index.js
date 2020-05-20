const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home').default;
const config = require('./config');

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
