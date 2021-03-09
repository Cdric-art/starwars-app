import React from 'react'
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import NavBar from "./components/modules/NavBar";

import Home from "./components/pages/Home";
import Films from "./components/pages/Films";

import './style/app.scss'
import FilmsId from "./components/pages/FilmsId";

function App() {

    return (
        <div className="main">
            <BrowserRouter>
                <h1>Star Wars</h1>
                <Switch>
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/films/:id" component={FilmsId} />
                    <Route exact path="/" component={Home} />
                </Switch>
                <NavBar />
            </BrowserRouter>
        </div>
    )
}

export default App
