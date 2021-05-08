import { Helmet } from 'react-helmet'
import '../styles/premium.css'
import { PayPalButton } from "react-paypal-button-v2"
import { Redirect } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

function Premium() {

    const paypal_client_id = process.env.NODE_ENV === 'development' ? 'AWiiB-0YMKU75CURJJVmpP41WAd4Akc5GgZ3G7ZPunumFGoCO60f0RC83JFJE6R7ngfBfylFYpVaChuy' : 'AY0Whw-7DWlhKjGt5DTHYyMViTDhy5ATHFeBevkx6Wjb29g2oh_ATjkBFN0ERfSQZwZ7ZI9u5X3_CMTJ'

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
                    onSuccess={(details, data) => {

                        // add discord id to response and then send to api

                        details['discord_id'] = 69420
                        console.log(details)
                        axios.post(
                            'https://api.voicerooms.app/purchase',
                            details,
                            {
                                headers: {
                                    Authorization: 'Bearer ' + process.env.REACT_APP_VOICEROOMS_API_KEY
                                }
                            }
                        )

                        // redirect to thank you page afterwards
                        setRedirect(true)
                    }}
                />
            </div>

        </div>
    )
}

export default Premium;