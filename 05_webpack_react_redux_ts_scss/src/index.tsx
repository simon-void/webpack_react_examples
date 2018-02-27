import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import App from "./components/app"
import { rootReducer } from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);


function createAppParent() {
  let element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), createAppParent());
