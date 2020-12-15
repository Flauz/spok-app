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

    }
})


const ViewOrder = () => {
    const { dataCollections } = useSelector(data => data.orderReducer)
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        const desserts = db.collection('desserts')
        const products = []
        desserts.get().then(snapshot => {
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
                    <Typography variant="h3">Commandez en ligne</Typography>
                    <Grid container justify="center">

                        {dataCollections.map((product, id) =>
                            <Grid item xs={12} sm={8} md={6}>
                                <Product
                                    className={classes.productCard}
                                    key={id}
                                    item={product}
                                />
                            </Grid>
                        )}

                    </Grid>
                </Box>
            }

        </>
    )
}

export default ViewOrder
