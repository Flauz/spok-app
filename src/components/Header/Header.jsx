import React, { useState } from 'react'
import { useSelector } from "react-redux"
import Logo from './Logo'
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import LocalMallIcon from '@material-ui/icons/LocalMall';
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
        justifyContent: "space-between",
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
                    <Box className={classes.buttn} style={{ color: "#264254" }}>
                        <Button variant="outlined" style={{ color: "#264254" }}>
                            commander en ligne
                        </Button>
                    </Box>

                    <Box>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <AccountCircleIcon />
                        </IconButton>
                        {currentUser &&
                            (
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/profil"
                                        onClick={handleClose}
                                    >
                                        Profile
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            auth.signOut()
                                            handleClose()
                                        }}
                                    >
                                        Déconnexion
                                    </MenuItem>
                                </Menu>
                            )
                        }
                        {!currentUser && (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem component={Link} to="/signin" onClick={handleClose}>Se connecter</MenuItem>
                                <MenuItem component={Link} to="/signup" onClick={handleClose}>S'inscire</MenuItem>
                            </Menu>
                        )
                        }
                    </Box>
                    <Box>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <LocalMallIcon />
                        </IconButton>
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
