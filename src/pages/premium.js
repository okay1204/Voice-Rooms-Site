import { Helmet } from 'react-helmet'
import '../styles/premium.css'
import { PayPalButton } from "react-paypal-button-v2"
import { Redirect } from 'react-router-dom'
import React from 'react'
import DiscordLogo from '../images/discord logo white.png'
import constants from '../constants'
import { useCookies } from 'react-cookie'
import LoadingWheel from '../images/loading wheel.gif'
import FeatureBox from '../components/featureBox.js'
import Hashtag from '../images/hashtag.png'
import Lock from '../images/lock.png'
import Timer from '../images/timer.png'
import CheckWithArrows from '../images/check with arrows.png'

const { discord_auth_url } = constants

function Premium(props) {

    const [cookies] = useCookies(['discord_prompt'])

    const credit_cost = '5.00'

    const paypal_client_id = process.env.NODE_ENV === 'development' ? 'AWiiB-0YMKU75CURJJVmpP41WAd4Akc5GgZ3G7ZPunumFGoCO60f0RC83JFJE6R7ngfBfylFYpVaChuy' : 'AY0Whw-7DWlhKjGt5DTHYyMViTDhy5ATHFeBevkx6Wjb29g2oh_ATjkBFN0ERfSQZwZ7ZI9u5X3_CMTJ'

    const [redirect, setRedirect] = React.useState(null)
    const [quantity, setQuantity] = React.useState(1)

    const total_cost = (parseFloat(credit_cost) * quantity) + '.00'

    let purchase_element = null

    switch (props.discord_user) {
        case undefined:
            purchase_element = <img className='purchase-loading-wheel' src={LoadingWheel} alt='Loading'/>
            break
        
        case null:
            purchase_element = (
                <div className='purchase-discord-login'>
                    <h3 className='purchase-discord-title'>You must be logged in with Discord to purchase premium credits</h3>
                    <a className='purchase-discord-login-button' href={discord_auth_url(cookies.discord_prompt)}>
                        <img src={DiscordLogo} className='purchase-discord-logo' alt='Log in with discord'/>
                        Log in with Discord
                    </a>
                </div>
            )
            break

        default:
            purchase_element = (
                <div className='paypal-buttons'>
                    <PayPalButton 
                        amount='5.00'
                        currency='USD'
                        shippingPreference='NO_SHIPPING'
                        options={{
                            clientId: paypal_client_id,
                            'disable-funding': 'credit,card'
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
            )
            break
    }

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
                    {purchase_element}
                </div>
                
            </div>

            <h4 className='premium-features-header'>Features</h4>

            <div className='features-list'>
                <FeatureBox 
                    title='Text Rooms'
                    desc='Create temporary text channels that pair up with your voice channels'
                    image_src={Hashtag}
                    alt='Text icon'
                />

                <FeatureBox 
                    title='Keep Alive'
                    desc='Set a duration of time for your voice channels to remain before being deleted'
                    image_src={Timer}
                    alt='Timer icon'
                />

                <FeatureBox 
                    title='Restricted Roles'
                    desc='Control which roles are not allowed to create voice rooms'
                    image_src={Lock}
                    alt='Lock icon'
                />

                <FeatureBox 
                    title='More to Come!'
                    desc='This is only the start, more features are planned to be added to premium! Feel free to reach out in our support server for any suggestions!'
                    image_src={CheckWithArrows}
                    alt='Lock icon'
                />
            </div>


        </div>
    )
}

export default Premium;