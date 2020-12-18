import { Box, Typography, createMuiTheme, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { db } from "../firebase/utils"
import { setDataFromFirestore } from '../redux/actions/orderActions'
import Product from "./Order/Product"
import { makeStyles } from '@material-ui/styles'


const theme = createMuiTheme()

const useStyles = makeStyles({
    container: {

    },
    productContainer: {

    },
    productCard: {

    },
    title: {
        margin: theme.spacing(6)
    },
    containerMeal: {
        margin: "auto"
    },
    containerDessert: {
        // margin: theme.spacing(4)
    },
    mealTitle: {
        // marginBottom: theme.spacing(5)
    },
    dessertTitle: {
        // marginBottom: theme.spacing(4)
    },
    gridContainer: {
        paddingLeft: "10vw",
        paddingRight: "10vw"
    }
})


const ViewOrder = () => {
    const { dataCollections } = useSelector(data => data.orderReducer)
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        const lunch = db.collection('lunch')
        const products = []
        lunch.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                products.push(doc.data())
            })
            console.log(products)
            dispatch(setDataFromFirestore(products))
            setIsLoaded(true)
        })

    }, [])



    return (
        <>
            {!isLoaded ? "Loading..." :
                <Box>

                    <Typography className={classes.title} variant="h3">Commandez en ligne</Typography>
                    <Box className={classes.containerMeal}>
                        <Typography className={classes.mealTitle} variant="h4">Nos Plats</Typography>
                        <Grid container
                            className={classes.gridContainer}
                            spacing={3}
                            justify="center"

                        >
                            {dataCollections && dataCollections.map((product, id) => (
                                product.type && product.type === "meal" &&
                                <Grid item xs={12} sm={6} md={4} lg={2}>
                                    <Product
                                        className={classes.productCard}
                                        key={id}
                                        item={product}
                                    />
                                </Grid>
                            )
                            )}
                        </Grid>
                    </Box>
                    <Box className={classes.containerDessert}>
                        <Typography className={classes.dessertTitle} variant="h4">Nos desserts</Typography>
                        <Grid container
                            justify="center"
                            className={classes.gridContainer}
                            spacing={3}
                        >
                            {dataCollections && dataCollections.map((product, id) => (
                                product.type && product.type === "dessert" &&
                                <Grid item xs={12} sm={6} md={4} lg={2}>
                                    <Product
                                        className={classes.productCard}
                                        key={id}
                                        item={product}
                                    />
                                </Grid>
                            )
                            )}
                        </Grid>
                    </Box>
                </Box>
            }

        </>
    )
}

export default ViewOrder
