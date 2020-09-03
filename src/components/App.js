import React from 'react';
import { Route } from "react-router-dom";

import Home from './../pages/home';

function App() {
    return (
        <React.Fragment>
            <div>
                <Route path="/" exact component={Home} />
            </div> 
        </React.Fragment>
    );
}

export default App;
