import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
        a: {
            textDecoration: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    logo: {
        height: '65px'
    },
    toolbar: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#5a87c5',
        color: theme.palette.grey[200]
    },
    link: {
        margin: theme.spacing(1, 1.5),
        backgroundColor: theme.palette.grey[200],
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

export default function Header({isSignedIn, onSignOut}) {
    const classes = useStyles();

    const onClick = () => {
        console.log('click')
        if (isSignedIn && onSignOut) {
            onSignOut();
        }
    };

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo}
                         src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Qad-inc-logo.png/220px-Qad-inc-logo.png'/>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        component={RouterLink}
                        to="/"
                    >
                        QAD Micro-frontends Demo
                    </Typography>
                    <Button
                        color="inherit"
                        variant="outlined"
                        className={classes.link}
                        component={RouterLink}
                        to={isSignedIn ? '/' : '/auth/signin'}
                        onClick={onClick}>
                        {isSignedIn ? 'Logout' : 'Login'}
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
