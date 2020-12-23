import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AlternateEmail } from '@material-ui/icons';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signUpUser } from "../../redux/actions/userActions"


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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const { signUpSucces } = useSelector(user => user.userReducer)
    const { signUpError } = useSelector(user => user.userReducer)
    const history = useHistory()

    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(signUpUser({ displayName, email, password, confirmPassword }))
    }

    useEffect(() => {
        if (signUpSucces) {
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setErrors([])
            history.push('/')
        }
    }, [signUpSucces])

    useEffect(() => {
        if (signUpError.length > 0) {
            setErrors(signUpError)
        }
    }, [signUpError])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Inscrivez-vous rapidement
                </Typography>
                {errors.length > 0 && errors.map((err, i) => <Typography key={i}>{err}</Typography>)}
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="displayName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Prénom et Nom"
                                autoFocus
                                onChange={e => setDisplayName(e.target.value)}
                                value={displayName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adresse Email"
                                name="email"
                                autoComplete="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirmation mot de passe"
                                type="password"
                                id="confirmpassword"
                                autoComplete="current-password"
                                onChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="J'accepte de recevoir des offres promotionnelles par email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        je m'inscris
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Vous avez déja un compte ? Connectez-vous ici
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignUp