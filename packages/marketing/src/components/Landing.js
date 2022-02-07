import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import {Link} from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MaterialLink component={Link} to="/" color="inherit">
                Your Website
            </MaterialLink>{' '}
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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column"
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    logo: {
        alignSelf: "center",
        height: 200,
        border: "red solid 2px",
        padding: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        position: "absolute",
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    qadButton: {
        color: theme.palette.qad
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    {/*<div className={classes.heroContent} style={{border: 'red 1px solid'}}>*/}
                    <Container maxWidth="sm">
                        <div className={classes.mainContainer}>
                            <img className={classes.logo}
                                 src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Qad-inc-logo.png/220px-Qad-inc-logo.png'/>
                            <Typography
                                component="h4"
                                variant="h5"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                Welcome to Project Inspire Offsite
                            </Typography>
                            <Typography
                                variant="h6"
                                align="center"
                                color="textSecondary"
                                paragraph
                            >
                                You can set any page as your home page. For example, choose a dashboard from the
                                drop-down and select 'Set Current as Home' from the user menu..
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Link to="/goals">
                                            <Button variant="text" color="primary">
                                                Goals
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/agenda">
                                            <Button variant="outlined" color="primary">
                                                Agenda
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Container>
                </div>
                {/*<Container className={classes.cardGrid} maxWidth="md">
           End hero unit
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>*/}
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    © 1986 QAD, Inc. All rights reserved.
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
