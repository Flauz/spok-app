import React from 'react'
import Logo from './Logo'
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom"
import { auth } from '../../firebase/utils'

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


const Header = props => {
    const { currentUser } = props

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
                {currentUser &&
                    <Box className={classes.buttn} onClick={() => auth.signOut()}>
                        <Button variant="outlined" color="primary">
                            deconnexion
                    </Button>
                    </Box>
                }
                {!currentUser &&
                    <Box className={classes.buttn}>
                        <Button component={Link} to="/login" variant="outlined" color="primary">
                            se connecter
                        </Button>
                    </Box>
                }
            </Box>
            <Box>
                <Navbar />
            </Box>
        </Box>
    )
}

Header.defaultProps = {
    currentUser: null
}

export default Header