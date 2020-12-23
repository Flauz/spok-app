import React from 'react'
import { useSelector } from "react-redux"
import ProductCart from "../components/Order/ProductCart"
import StripeButton from './Stripe/StripeButton'
import { Box, Typography, createMuiTheme, Card, CardContent, CardActions } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme()

const useStyles = makeStyles(theme => ({
    boxSubContainer: {
        [theme.breakpoints.between("xs", "md")]: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        },
        // [theme.breakpoints.down("md")]: {
        //     display: "flex",
        //     justifyContent: "center",
        //     flexDirection: "column",
        // },

    },
    boxCardPaiment: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 10
    }
}));

const ViewCart = () => {
    const { cartItems } = useSelector(cart => cart.cartReducer)
    const reduceTotalPrice = (price, item) => price + item.price * item.quantity
    const totalPrice = cartItems.reduce(reduceTotalPrice, 0)

    const classes = useStyles()

    return (
        <Box>
            <h1>Votre panier</h1>
            <Box>
                {cartItems.length ? (
                    <Box className={classes.boxSubContainer}>
                        <Box>
                            {cartItems.map((item, id) => <ProductCart item={item} key={id} />)}
                        </Box>
                        <Box>
                            <Card className={classes.boxCardPaiment}>
                                <CardContent>
                                    <Typography
                                        variant="h6">TOTAL : {totalPrice}€</Typography>
                                </CardContent>
                                <CardActions>
                                    <StripeButton price={totalPrice} />
                                </CardActions>
                            </Card>
                        </Box>
                    </Box>
                )
                    : <Typography variant="h6">votre panier est vide</Typography>
                }
            </Box>
        </Box>
    )
}

export default ViewCart
