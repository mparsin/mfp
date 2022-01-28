import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Container from "@material-ui/core/Container";

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

function createData(name, completed, goal) {
    return {name, completed, goal};
}

const rows = [
    createData('Maxim Parsin', 'No', 'Define a version control workflow (Branching, Pull Requests, Review process etc.)'),
    createData('Carl', 'No', 'Agree on the number and scope of POCs, with a clear documented output of each of them (verify if they will be effective for helping us to be ready for the next evaluation milestone and budget confirmation)'),
    createData('Carl', 'No', 'I hope that after our internal discussions we will be able to express the needs for the outsourcing from Exadel. An initial timeline with when we will need the Exadel teams, and how long.'),
    createData('Carl', "No", 'Understand the required communication and means to keep the rest of the organization informed in order to ensure decisions taken in the context of AUX/Platform completion in the traditional product are not making moving to the final architecture harder. Also understand the role of the Architect Council.'),
];

export default function Goals() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Goals
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci consectetur culpa doloribus ea
                eveniet explicabo facere incidunt ipsa magnam, nam obcaecati pariatur praesentium sed similique suscipit
                tempore velit veniam?
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Added By</TableCell>
                            <TableCell align="center">Completed</TableCell>
                            <TableCell align="left">Goal for the offsite</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.goal}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.completed}</TableCell>
                                <TableCell align="left">{row.goal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
