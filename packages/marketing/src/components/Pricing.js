import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
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

const tiers = [
  {
    day: 'Monday',
    subheader: 'February 14',
    seqNo: 1,
    agenda: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    day: 'Tuesday',
    subheader: 'February 15',
    seqNo: 2,
    agenda: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'More details',
    buttonVariant: 'contained',
  },
  {
    day: 'Wednesday',
    subheader: 'February 16',
    seqNo: 3,
    agenda: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'More details',
    buttonVariant: 'outlined',
  },
  {
    day: 'Thursday',
    subheader: 'February 17',
    seqNo: 4,
    agenda: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'More details',
    buttonVariant: 'outlined',
  },
  {
    day: 'Friday',
    subheader: 'February 18',
    seqNo: 5,
    agenda: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'More details',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Agenda
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci consectetur culpa doloribus ea eveniet explicabo facere incidunt ipsa magnam, nam obcaecati pariatur praesentium sed similique suscipit tempore velit veniam?
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.day}
              xs={12}
              sm={tier.day === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={`Day ${tier.seqNo}`}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.day === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h3" variant="h4" color="textPrimary">
                      {tier.day}
                    </Typography>
                  </div>
                  <div className={classes.cardPricing}>
                    <Typography variant="h6" color="textSecondary">
                      {tier.subheader}
                    </Typography>
                  </div>
                  <ul>
                    {tier.agenda.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
