import React from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

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

export default () => {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <MarketingApp/>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>);
}
