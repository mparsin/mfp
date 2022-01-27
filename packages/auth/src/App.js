import {Router, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React from 'react'
import SignUp from "../components/Signup";
import SignIn from "../components/Signin";

const generateClassName = createGenerateClassName({
    productionPrefix: 'aut'
})

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" component={SignIn}/>
                    <Route path="/auth/signup" component={SignUp}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
