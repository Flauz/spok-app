import { Box, createMuiTheme, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import React from "react"

const theme = createMuiTheme()

const useStyles = makeStyles({
    container: {

    },
    insideContainer: {
        width: "40%",
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(6)
    },
    typoSubtitle: {
        textAlign: "justify"
    },
    typoBody: {
        textAlign: "justify",
        marginTop: theme.spacing(3)
    }
})

const ViewConcept = () => {

    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Box className={classes.insideContainer}>
                <Typography variant="h5">
                    Des cantines hors normes
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Dans une société où le « vite » doit s’allier au « bien », Spok réinvente la pause déjeuner en mixant les codes de la restauration traditionnelle - un chef, des produits frais et des plats du jour - à ceux de la restauration rapide, avec une offre créative, saine et savoureuse de prêt-à-manger.
                </Typography>
            </Box>

            <Box className={classes.insideContainer}>
                <Typography variant="h5">
                    Un ton, une ambiance et une façon de faire différemment
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Le parcours d’autodidacte et la personnalité singulière de son fondateur, Christophe Juville, l’ont conduit à imaginer une proposition hors norme, influencée par toutes ses passions : la cuisine, bien sûr, mais aussi l’architecture, la photographie et la mode.
                </Typography>
            </Box>

            <Box className={classes.insideContainer}>
                <Typography variant="h5">
                    Une communauté de chefs d’entreprise passionnées et passionants
                </Typography>

                <Typography className={classes.typoBody} variant="body1">
                    Depuis 2005, Spok accompagne des profils hétéroclites de franchisés en reconversion professionnelle autour d’un concept qui a fait ses preuves.

                    Après plusieurs années de développement à Marseille, Spok compte aujourd’hui plus de 30 restaurants implantés en franchises à travers toute la France.
                </Typography>
            </Box>
        </Box>
    )
}

export default ViewConcept