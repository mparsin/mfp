import React, {lazy, useEffect, useState, Suspense} from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import Progress from './components/Progress';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {createGenerateClassName, createTheme, MuiThemeProvider, StylesProvider} from "@material-ui/core";
import {createBrowserHistory} from 'history';
import redirect from "react-router-dom/es/Redirect";

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const theme = createTheme({
    palette: {
        secondary: {
            main: '#d32f2f'
        },
        qad: {
            main: '#5a87c5'
        }
    },
});

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Header
                            onSignOut={() => setIsSignedIn(false)}
                            isSignedIn={isSignedIn}/>
                        <Suspense fallback={<Progress/>}>
                            <Switch>
                                <Route path="/auth">
                                    <AuthLazy onSignIn={() => {
                                        console.log('signing in')
                                        setIsSignedIn(true);
                                        history.push('/agenda')
                                    }} onSignOut={() => {
                                        console.log('onSignOut')
                                        setIsSignedIn(false)
                                    }}/>
                                </Route>
                                {/* <Route path="/dashboard">
                                    {!isSignedIn && <Redirect to="/" />}
                                    <DashboardLazy />
                                </Route>*/}
                                <Route path="/">
                                    <MarketingLazy isSignedIn={isSignedIn}/>
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>
                </MuiThemeProvider>
            </StylesProvider>
        </Router>
    );
}
