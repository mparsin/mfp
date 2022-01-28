import Landing from './components/Landing';
import {Router, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Pricing from "./components/Pricing";
import React, {useEffect, useState} from 'react'
import Redirect from "react-router-dom/es/Redirect";
import Goals from "./components/Goals";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default ({history, isSignedIn}) => {

    useEffect(() => {
        if (isSignedIn) {
            history.push('/agenda');
        }
    }, [isSignedIn]);

    const PrivateRoute = ({ isLoggedIn, ...props }) =>
        isLoggedIn
            ? <Route { ...props } />
            : <Redirect to="/auth/signin" />

    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <PrivateRoute isLoggedIn={isSignedIn} path="/agenda" component={Pricing}/>
                    <Route path='/goals' component={Goals}/>
                    <Route path='/' component={Landing}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
