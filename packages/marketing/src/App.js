import Landing from './components/Landing';
import {Router, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Pricing from "./components/Pricing";
import React from 'react'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/agenda' component={Pricing}/>
                    <Route path='/' component={Landing}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
