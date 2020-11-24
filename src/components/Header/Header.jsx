import React, { useState } from 'react'
import { useSelector } from "react-redux"
import Logo from './Logo'
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
    groupButtn: {
        '& > *': {
            margin: theme.spacing(1)
        },
        display: "flex",
        alignItems: "center"
    }
}));



const Header = () => {
    const { currentUser } = useSelector(user => user.userReducer)
    const [anchorEl, setAnchorEl] = useState(null)


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.insideContainer}>
                <Logo />
                <Box className={classes.groupButtn}>
                    <Box className={classes.buttn}>
                        <Button variant="outlined" color="primary">
                            commander en ligne
                        </Button>
                    </Box>

                    <Box>
                        {currentUser &&
                            <>
                                <ButtonGroup
                                    orientation="vertical"
                                    color="primary"
                                    aria-label="vertical outlined primary button group"
                                >
                                    <Button component={Link} to="/profil">
                                        Profil
                                    </Button>
                                    <Button onClick={() => auth.signOut()}>
                                        deconnexion
                                    </Button>
                                </ButtonGroup>
                            </>
                        }

                        {!currentUser &&
                            <Box className={classes.buttn}>
                                <Button component={Link} to="/signin" variant="outlined" color="primary">
                                    se connecter
                        </Button>
                            </Box>
                        }

                        <div>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>

                    </Box>
                </Box>
            </Box>
            <Box>
                <Navbar />
            </Box>
        </Box>
    )
}


export default Header
