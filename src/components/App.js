import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './../pages/home';
import Home2 from './../pages/home2';

function App() {
    return (
        <React.Fragment>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/1" exact component={Home} />
                    <Route path="/2" exact component={Home2} />
                </Switch>
            </div> 
        </React.Fragment>
    );
}

export default App;
