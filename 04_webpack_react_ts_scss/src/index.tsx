import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app"


function createAppParent() {
  let element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), createAppParent());
