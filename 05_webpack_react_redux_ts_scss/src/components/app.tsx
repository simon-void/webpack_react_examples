import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import "./scss/app.scss";
import Status from '../container/status';
import AIncrementator from '../container/increment_a';
import BModificator from '../container/modify_b';

const App = () => (
    <div>
        <header>
            <h1>React Redux TypeScript SCSS</h1>
            <nav>
                <span><Link to='/'>status</Link></span>
                <span><Link to='/inc_a'>increment A</Link></span>
                <span><Link to='/set_b'>set B</Link></span>
            </nav>
        </header>

        <main>
            <Switch>
                <Route exact path="/" component={() => (<Status />)} />
                <Route exact path="/inc_a" component={() => (<AIncrementator />)} />
                <Route exact path="/set_b" component={() => (<BModificator />)} />
            </Switch>
        </main>

        <footer>
            Footer
        </footer>
    </div>
);

export default App;