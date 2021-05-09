import { Helmet } from 'react-helmet'
import '../styles/premium.css'
import { PayPalButton } from "react-paypal-button-v2"
import { Redirect } from 'react-router-dom'
import React from 'react'

function Premium() {

    const paypal_client_id = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_PAYPAL_SANDBOX_ID : process.env.REACT_APP_PAYPAL_LIVE_ID

    const [redirect, setRedirect] = React.useState(false)

    return (
        <div id='premium-body' className='body'>

            {redirect && <Redirect to='/premium/thanks' />}

            <Helmet>
                <title>Voice Rooms • Premium</title>
            </Helmet>

            <h1 className='premium-title'>Premium</h1>

            

            <div className='paypal-buttons'>
                <PayPalButton 
                    amount='5.00'
                    currency='USD'
                    shippingPreference='NO_SHIPPING'
                    options={{
                        clientId: paypal_client_id
                    }}
                    custom_id='yes'
                    createOrder={(data, actions) => (
                        actions.order.create({
                            intent: 'CAPTURE',
                            purchase_units: [
                                {
                                    amount: {
                                        value: '5.00'
                                    },
                                    description: 'Voice Rooms premium credits to access premium features.',
                                    custom_id: 69420 // NOTE change this to discord id
                                }
                            ],
                            application_context: {
                                'brand_name': 'Voice Rooms',
                                'shipping_preference': 'NO_SHIPPING'
                            }
                        })
                    )}
                    onApprove={(data, actions) => {
                        // redirect to thank you page afterwards
                        setRedirect(true)
                    }}
                />
            </div>

        </div>
    )
}

export default Premium;