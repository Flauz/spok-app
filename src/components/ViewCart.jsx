import React from 'react'
import { useSelector } from "react-redux"
import ProductCart from "../components/Order/ProductCart"
import StripeButton from './Stripe/StripeButton'
import { Box, Typography } from "@material-ui/core"

const ViewCart = () => {
    const { cartItems } = useSelector(cart => cart.cartReducer)
    const reduceTotalPrice = (price, item) => price + item.price * item.quantity
    const totalPrice = cartItems.reduce(reduceTotalPrice, 0)

    return (
        <Box>
            <h1>Votre panier</h1>
            <Box>
                {cartItems.length ? (
                    <>
                        {cartItems.map((item, id) => <ProductCart item={item} key={id} />)}
                        <Typography variant="h6">TOTAL : {totalPrice}€</Typography>
                        <StripeButton />
                    </>
                )
                    : <Typography variant="h6">votre panier est vide</Typography>
                }
            </Box>
        </Box>
    )
}

export default ViewCart
