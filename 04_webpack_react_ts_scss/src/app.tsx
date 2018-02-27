import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import "./app_styles.scss";

const Hello = () => (<div>Hello ...</div>);
const World = () => (<div>... World</div>);

const App = () => (
    <div>
        <header>
            <h1>React TypeScript SCSS</h1>
            <nav>
                <span><Link to='/'>hello</Link></span>
                <span><Link to='/world'>world</Link></span>
            </nav>
        </header>

        <main>
            <Switch>
                <Route exact path="/" component={() => (<Hello />)} />
                <Route exact path="/world" component={() => (<World />)} />
            </Switch>
        </main>

        <footer>
            Footer
        </footer>
    </div>
);

export default App;