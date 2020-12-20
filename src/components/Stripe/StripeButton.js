import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

const StripeButton = ({price}) => {
    

    const priceStripe = price * 100

    const handleToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceStripe,
                token,
            },
            })
            .then((response) => {
                alert("Payment Sucessfull");
            })
            .catch((error) => {
                console.log("Payment error:", JSON.parse(error));
                alert("There was an issue with you payment.");
            });
    }

    return (
        <div>
            {console.log("HELLO ::", price)}
            <StripeCheckout
                stripeKey="pk_test_51HtE9FAl56aPQwav6Bs4sLKoobP8VOEWwKu1vkCWfDDOxXQyX41Ogtm2dTLexUp3727e6weeZTL0N5XS22h3WMQL00JlAY1JV3"
                token={handleToken}
                label={`Payer`}
                billingAddress
                shippingAddress
                description={`Votre total est de ${price}€`}
                amount={priceStripe}
            
            />
        </div>
    )
}

export default StripeButton
