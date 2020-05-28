import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import createStore from './state/createClientStore';

hydrate(
  <Provider store={createStore()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
