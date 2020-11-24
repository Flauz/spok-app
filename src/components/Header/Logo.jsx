import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "flex-end",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none"
        }

    }
});

const Logo = () => {
    const classes = useStyles();

    return (
        <Box component={Link} to="/" className={classes.root}>
            <Typography variant="h1" style={{ color: "black" }}>
                spok.
            </Typography>
            <Typography style={{ marginBottom: "16px", color: "black" }}>
                cantines de chefs
            </Typography>
        </Box>
    )
}

export default Logo
