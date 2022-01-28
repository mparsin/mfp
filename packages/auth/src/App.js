import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {
    createGenerateClassName,
    createTheme,
    MuiThemeProvider,
    StylesProvider
} from "@material-ui/core";
import Signin from './components/Signin'
import Signup from './components/Signin'


const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({history, onSignIn}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn}/>
                        </Route>
                        <Route path="/">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
