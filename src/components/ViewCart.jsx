import React from 'react'
import { useSelector } from "react-redux"
import ProductCart from "../components/Order/ProductCart"

const ViewCart = () => {
    const { cartItems } = useSelector(cart => cart.cartReducer)
    const reduceTotalPrice = (price, item) => price + item.price * item.quantity
    const totalPrice = cartItems.reduce(reduceTotalPrice, 0)

    return (
        <div>
            <h1>Votre panier</h1>
            <div>
                {cartItems.length ? (

                    <>
                        {cartItems.map((item, id) => <ProductCart item={item} key={id} />)}
                        <div>TOTAL : {totalPrice}€</div>
                    </>


                )
                    : <p>votre panier est vide</p>
                }
            </div>
        </div>
    )
}

export default ViewCart
