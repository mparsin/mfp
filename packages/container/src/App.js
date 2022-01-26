import React from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, createTheme, MuiThemeProvider, StylesProvider} from "@material-ui/core";

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

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Header/>
                        <MarketingApp/>
                    </div>
                </MuiThemeProvider>
            </StylesProvider>
        </BrowserRouter>
    );
}
