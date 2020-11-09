import React, { useState, useEffect } from 'react'
import axios from "axios"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box, createMuiTheme } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"

const theme = createMuiTheme()

const useStyles = makeStyles({
    container: {
        marginTop: theme.spacing(20),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    containerMl: {

    },
    form: {
        width: "50%"

    },
    button: {
        marginTop: "1rem",
        color: "black",
        borderColor: "black"
    },
    bodyMl: {
        textAlign: "justify"
    }
})

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black",
        },
        "& label": {
            color: "black"
        },
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: "black"
            }
        },
        "& .Mui-focused fieldset": {
            borderColor: "black"
        }
    }
}
)(TextField)



const ViewContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const classes = useStyles()

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onMsgChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <Box className={classes.container}>


            <Box component="form" className={classes.form} >
                <Typography variant="h5" style={{ color: "black", textAlign: "center", textTransform: "uppercase" }}>
                    Contactez-nous
                    </Typography>
                <InputField
                    value={name}
                    onChange={onNameChange}
                    fullWidth={true}
                    label="Nom"
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    inputProps={{ style: { color: "black" } }}
                />
                <br />
                <InputField
                    value={email}
                    onChange={onEmailChange}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    inputProps={{ style: { color: "black" } }}
                />
                <br />
                <InputField
                    value={message}
                    onChange={onMsgChange}
                    fullWidth={true}
                    label="Sujet"
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    inputProps={{ style: { color: "black" } }}
                />
                <br />
                <InputField
                    value={message}
                    onChange={onMsgChange}
                    fullWidth={true}
                    label="Message"
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    inputProps={{ style: { color: "black" } }}
                />
                <br />
                <Button type="submit" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                    Envoyer
                </Button>
            </Box>
            <Box className={classes.containerMl}>
                <Typography variant="h5" className={classes.bodyMl}>
                    MENTIONS LÉGALES
                </Typography>
                <Typography className={classes.bodyMl}>
                    SDES
                    <br />
                    Société de Développement de l'Enseigne Spok
                    <br />
                    Immatriculée au RCS Marseille
                    <br />
                    N° SIRET 533 973 939 - Code NAF 7112B
                    <br />
                    N° TVA FR03533973939
                    <br />
                    Siège social 36 rue Sainte 13001 MARSEILLE
                </Typography>
            </Box>
        </Box>
    )
}

export default ViewContact