import React from "react";
import { render } from "react-dom";

import "./index.scss";

const App = () => (<div className={"app"}>HelloWorld</div>);

function createAppParent() {
  let element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

render((
    <App />
), createAppParent());
