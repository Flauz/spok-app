import { Box, createMuiTheme, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import React from "react"

const theme = createMuiTheme()

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-around"
    },
    insideContainer: {
        width: "40%",
        marginTop: theme.spacing(8),

    },
    typoSubtitle: {
        textAlign: "justify"
    },
    typoBody: {
        textAlign: "justify",
        marginTop: theme.spacing(3)
    }
})

const ViewFounder = () => {

    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Box className={classes.insideContainer}>
                <Typography variant="h4">
                    Itinéraire d'un autodidacte
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Né dans les quartiers nord de Marseille, Christophe Juville quitte l’école à 15 ans. Déterminé et ambitieux, il décide de forcer le destin et cherche un domaine où il pourrait entreprendre et réussir.
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Après un CAP à l’école hôtelière de Marseille et des expériences marquantes au sein d'établissements d’excellence, Christophe se lance rapidement pour ouvrir son premier restaurant à 24 ans.
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    En 2005, Christophe accepte le défi de développer deux espaces de restauration temporaires pour les Galeries Lafayette à Marseille. Il imagine une brasserie et le premier Spok, un restaurant de prêt-à-manger dont le succès est immédiat. C’est le déclic.
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Séduit par la possibilité d’offrir de bons plats autrement, Christophe développe la promesse Spok, de Marseille, à partout en France avec la volonté d’allier le meilleur de la restauration traditionnelle, dont il connaît tous les codes, à la restauration rapide, dont il a pressenti l’essor.
                </Typography>
            </Box>
            <Box>
                <img src="https://static.wixstatic.com/media/f67050_7090ff5c86a24b56bdb01d07647dbc9d~mv2.jpg/v1/fill/w_419,h_623,al_c,q_80,usm_0.66_1.00_0.01/jfynnlVb.webp" alt="" />
            </Box>
        </Box>
    )
}

export default ViewFounder