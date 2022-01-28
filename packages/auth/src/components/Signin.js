import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'© 1986 QAD, Inc. '}
            <Link color="inherit" to="/">
                All rights reserved
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none',
        },
    },
    card: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    logo: {
        height: 120
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#5a87c5',
        color: 'white'
    },
    welcome: {
        textAlign: "center",
        marginTop: theme.spacing(2),
    },
    main: {
    }
}));

export default function SignIn({onSignIn, isSignIn}) {
    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs" className={classes.main}>
            <Card className={classes.card}>
                <div className={classes.paper}>
                    <img className={classes.logo}
                         src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Qad-inc-logo.png/220px-Qad-inc-logo.png'/>
                    <Typography component="h1" variant="h5" className={classes.welcome}>
                        Sign in to QAD Project Inspire Offsite, 2022
                    </Typography>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className={classes.form}
                        noValidate
                    >
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick={()=>onSignIn(true)}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Card>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>

    );
}
