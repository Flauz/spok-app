import React from 'react'
import Logo from './Logo'
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    buttn: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    insideContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: theme.spacing(6)
    },
}));


const Header = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.insideContainer}>
                <Logo />
                <Box className={classes.buttn}>
                    <Button variant="outlined" color="primary">
                        commander en ligne
                </Button>
                </Box>
            </Box>
            <Box>
                <Navbar />
            </Box>
        </Box>
    )
}

export default Header
