import React from 'react'
import { useSelector } from "react-redux"
import ProductCart from "../components/Order/ProductCart"

const ViewCart = () => {
    const { cartItems } = useSelector(cart => cart.cartReducer)

    return (
        <div>
            <h1>Hello cart</h1>
            {console.log("AHALALLA", cartItems)}

            <div>
                {cartItems.length ? ( cartItems.map((item, id) => {
                    <ProductCart item={item} key={id} />
                }))
                : <p>votre panier est vide</p>
            }
            </div>
        </div>
    )
}

export default ViewCart
