import * as React from "react";
import { render } from "react-dom";

const App = () => (<div>Hello React with Typescript</div>);

function createAppParent() {
  let element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

render((
    <App />
), createAppParent());
