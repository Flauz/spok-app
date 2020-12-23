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
    pictureContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(8)
    },
    picture: {
        marginTop: theme.spacing(6)
    },
    typoSubtitle: {
        textAlign: "justify"
    },
    typoBody1: {
        textAlign: "justify",
        marginTop: theme.spacing(3)
    },
    typoBody2: {
        textAlign: "justify",
    },
    typoSub: {
        marginTop: theme.spacing(3),
        textAlign: "justify",
    }
})

const ViewEngagements = () => {

    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Box className={classes.insideContainer}>
                <Box >
                    <Typography variant="h5">
                        Par essence, Spok est engagé
                    </Typography>

                    <Typography className={classes.typoBody1} variant="body1">
                        Depuis le départ, l’ambition est claire : déclarer la guerre aux produits d’assemblage, aux matières grasses superflues et aux agents conservateurs.
                    </Typography>

                    <Typography className={classes.typoBody1} variant="body1">
                        Tout est cuisiné sur place, à l’exception du pain pour lequel nous avons méticuleusement sélectionné des artisans boulangers locaux, qui nous livrent chaque matin.
                    </Typography>

                    <Typography className={classes.typoBody1} variant="body1">
                        Jamais de couverts en plastique chez Spok. Nous utilisons des couverts en amidon de maïs (biodégradables) et des couverts en inox pour les clients qui restent sur place.
                    </Typography>

                    <Typography className={classes.typoBody1} variant="body1">Depuis 2005, nous voulons du bon, du beau, mais pas que.</Typography>
                </Box>
                <Box >
                    <Typography variant="h5">
                        2017
                    </Typography>
                    <Typography className={classes.typoBody1} variant="body1">
                        Nos boites sont désormais constituées de papier exclusivement issu de forêts gérées. Une fois recyclées, elles sont transformées en bobines à papier recyclé, elles-mêmes utilisées pour fabriquer nos sacs et nos serviettes. La boucle est bouclée.
                    </Typography>
                </Box>
                <Box >
                    <Typography variant="h5">
                        2018
                    </Typography>
                    <Typography className={classes.typoBody1} variant="body1">
                        Nous rencontrons Kawa qui source les meilleurs cafés de spécialité directement auprès de producteur. Torréfié artisanalement et moulu sur place à la commande, c’est la fin des capsules dans tous les nouveaux Spok.
                    </Typography>
                </Box>
                <Box >
                    <Typography variant="h5">
                        2019
                    </Typography>
                    <Typography className={classes.typoBody1} variant="body1">
                        Nous instaurons le lundi vert dans nos menus. Le plat du jour du lundi sera sans viande ou poisson, des légumes de saison et puis c’est tout.
                    </Typography>
                    <Typography className={classes.typoBody1} variant="body1">
                        Toogoodtogo et Karma nous aident également à limiter au maximum le gaspillage alimentaire en revendant nos invendus à un prix compétitif.
                    </Typography>

                </Box>
                <Box >
                    <Typography variant="h5">
                        En 2020, cela ne suffit plus
                    </Typography>
                    <Typography className={classes.typoBody1} variant="body1">
                        Nous rencontrons Kawa qui source les meilleurs cafés de spécialité directement auprès de producteur. Torréfié artisanalement et moulu sur place à la commande, c’est la fin des capsules dans tous les nouveaux Spok.
                    </Typography>
                    <Typography className={classes.typoBody2} variant="body1">
                        Nous remettons tout en question et explorons toutes les possibilités pour agir et prendre une longueur d’avance, à notre échelle :
                    </Typography>
                    <Typography className={classes.typoSub} >Encore plus de local et de saison</Typography>
                    <Typography className={classes.typoBody2} variant="body1">
                        Chaque ingrédient entrant dans nos cuisines est remis en question – Peut-on faire encore mieux ? Passer au riz de Camargue bio exclusivement, privilégier le maquereau ou la bonite, n’utiliser que du bœuf charolais dans nos burgers, etc.
                    </Typography>
                    <Typography className={classes.typoSub}>
                        Je trie, tu tries, nous trions
                    </Typography>
                    <Typography className={classes.typoBody2} variant="body1">
                        L’implantation de poubelles de tri dans tous nos restaurants d’ici fin 2020, mais aussi la mise en place de composteurs tests en visant leur déploiement à terme sur tout le réseau.
                    </Typography>
                    <Typography className={classes.typoSub}>
                        La fin du plastique
                    </Typography>
                    <Typography className={classes.typoBody2} variant="body1">
                        Adieux bouteilles en plastique (et canettes) depuis janvier 2020. Nous nous engageons également à supprimer toute trace de plastique à usage unique pour la fin d'année. Nous cherchons même des solutions pour nous débarrasser de tout packaging.
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.pictureContainer}>
                <img src="https://zupimages.net/up/20/48/p8tc.png" alt="image" />
                <img className={classes.picture} src="https://zupimages.net/up/20/48/c9ue.png" alt='image' />
            </Box>
        </Box>
    )
}

export default ViewEngagements
