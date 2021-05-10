import { Helmet } from 'react-helmet'
import '../styles/premium.css'
import { PayPalButton } from "react-paypal-button-v2"
import { Redirect } from 'react-router-dom'
import React from 'react'

function Premium() {

    const credit_cost = '5.00'

    const paypal_client_id = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_PAYPAL_SANDBOX_ID : process.env.REACT_APP_PAYPAL_LIVE_ID

    const [redirect, setRedirect] = React.useState(false)
    const [quantity, setQuantity] = React.useState(5)

    const total_cost = (parseFloat(credit_cost) * quantity) + '.00'

    return (
        <div id='premium-body' className='body'>

            {redirect && <Redirect to='/premium/thanks' />}

            <Helmet>
                <title>Voice Rooms • Premium</title>
            </Helmet>

            <div className='premium-gradient'>
                <h1 className='premium-title'>Premium</h1>
                <h2 className='premium-subtitle'>Unlock Voice Room's full potential</h2>
            </div>

            <div className='purchase-section'>
                <div className='paypal-buttons'>
                    <PayPalButton 
                        amount='5.00'
                        currency='USD'
                        shippingPreference='NO_SHIPPING'
                        options={{
                            clientId: paypal_client_id
                        }}
                        style={{
                            color: 'blue'
                        }}
                        custom_id='yes'
                        createOrder={(data, actions) => (
                            actions.order.create({
                                intent: 'CAPTURE',
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: 'USD',
                                            value: total_cost,
                                            breakdown: {
                                                item_total: {
                                                    currency_code: 'USD',
                                                    value: total_cost
                                                }
                                            }
                                        },
                                        description: 'Voice Rooms premium credits to access premium features.',
                                        soft_descriptor: 'PREMIUM CREDIT',
                                        items: [
                                            {
                                                name: 'Premium Credit',
                                                unit_amount: {
                                                    currency_code: 'USD',
                                                    value: credit_cost
                                                },
                                                quantity: String(quantity),
                                                description: 'Voice Romms premium credit to access premium features.'
                                            }
                                        ],
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
                
                <h3 className='premium-pricing'>$5</h3>
            </div>


        </div>
    )
}

export default Premium;