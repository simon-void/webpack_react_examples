import * as React from "react";
import { render } from "react-dom";

import "./index.css";

const App = () => (<div className={"app"}>Hello React with Typescript</div>);

function createAppParent() {
  let element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

render((
    <App />
), createAppParent());
