import { Helmet } from 'react-helmet'
import '../styles/premium.css'
import { PayPalButton } from "react-paypal-button-v2"
import { Redirect } from 'react-router-dom'
import React from 'react'
import DiscordLogo from '../images/discord logo white.png'
import constants from '../constants'

const { discord_auth_url } = constants

function Premium(props) {

    const credit_cost = '10.00'

    const paypal_client_id = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_PAYPAL_SANDBOX_ID : process.env.REACT_APP_PAYPAL_LIVE_ID

    const [redirect, setRedirect] = React.useState(null)
    const [quantity, setQuantity] = React.useState(1)

    const total_cost = (parseFloat(credit_cost) * quantity) + '.00'

    return (
        <div id='premium-body' className='body'>

            {redirect && <Redirect to={redirect} />}

            <Helmet>
                <title>Voice Rooms • Premium</title>
            </Helmet>

            <div className='premium-gradient'>
                <h1 className='premium-title'>Premium</h1>
                <h2 className='premium-subtitle'>Unlock Voice Room's full potential</h2>
            </div>

            <div className='purchase-section'>
                <div className='purchase-top'>
                    <div className='purchase-title-wrapper'>
                        <h1 className='purchase-title'>Premium Credit</h1>
                        <h2 className='purchase-subtitle'>One time payment for each server</h2>
                    </div>
                    <div className='purchase-quantity-wrapper'>
                        <span className='quantity-display'>{quantity} Credit{quantity !== 1 && 's'}</span>
                        <input className="purchase-quantity-slider" type="range" min="1" max="10" defaultValue={quantity} onChange={(e) => {setQuantity(parseInt(e.target.value))}}/>
                    </div>
                    <h3 className='purchase-pricing'>${quantity * parseFloat(credit_cost)}</h3>
                </div>
                <div className='purchase-bottom'>
                    {
                        props.discord_user ? 
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
                                                custom_id: props.discord_user.id
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
                                    setRedirect(`/premium/thanks?order_id=${data.orderID}`)
                                }}
                            />
                        </div>
                        :
                        <div className='purchase-discord-login'>
                            <h3 className='purchase-discord-title'>You must be logged in with Discord to purchase premium credits!</h3>
                            <a className='purchase-discord-login-button' href={discord_auth_url}>
                                <img src={DiscordLogo} className='purchase-discord-logo' alt='Log in with discord'/>
                                Log in with Discord
                            </a>
                        </div>
                    }
                </div>
                
            </div>


        </div>
    )
}

export default Premium;