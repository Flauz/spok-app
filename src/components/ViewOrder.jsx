import React from 'react'
import { db } from "../firebase/utils"



const ViewOrder = () => {

    const desserts = db.collection('desserts').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
        return desserts
    })


    return (
        <div>

            <h1>Commandez en ligne</h1>
        </div>
    )
}

export default ViewOrder
