import Landing from './components/Landing';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StylesProvider} from "@material-ui/core";
import Pricing from "./components/Pricing";
import React from 'react'

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}