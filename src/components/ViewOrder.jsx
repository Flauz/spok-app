import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { db } from "../firebase/utils"
import { setDataFromFirestore } from '../redux/actions/orderActions'
import Product from "./Order/Product"




const ViewOrder = () => {
    const { dataCollections } = useSelector(data => data.orderReducer)
    // const {cartItems} = useSelector(item => item.cartReducer)
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)


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
                <div>
                    {console.log("HERE :", dataCollections)}
                    <h1>Commandez en ligne</h1>
                    {dataCollections.map((product, id) =>
                        <Product
                            key={id}
                            item={product}
                        />
                    )}
                </div>
            }

        </>
    )
}

export default ViewOrder
