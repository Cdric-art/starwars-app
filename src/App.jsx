import React from 'react'
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import NavBar from "./components/modules/NavBar";

import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import FilmsId from "./components/pages/FilmsId";
import People from "./components/pages/People";

import './style/app.scss'
import Planets from "./components/pages/Planets";

function App() {

    return (
        <div className="main">
            <BrowserRouter>
                <h1>Star Wars</h1>
                <Switch>
                    <Route exact path="/planets" component={Planets} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/films/:id" component={FilmsId} />
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/" component={Home} />
                </Switch>
                <NavBar />
            </BrowserRouter>
        </div>
    )
}

export default App
