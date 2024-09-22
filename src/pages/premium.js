import React from 'react'
import { Helmet } from 'react-helmet'
import FeatureBox from '../components/featureBox.js'
import CheckWithArrows from '../images/check with arrows.png'
import Hashtag from '../images/hashtag.png'
import Lock from '../images/lock.png'
import Timer from '../images/timer.png'
import '../styles/premium.css'

function Premium(props) {

    return (
        <main id='premium-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Premium</title>
            </Helmet>

            <div className='premium-gradient'>
                <h1 className='premium-title'>Premium</h1>
                <h2 className='premium-subtitle'>Unlock Voice Room's full potential</h2>
            </div>

            <div className='purchase-section'>
                <h1 className='purchase-title'>Premium Subscription</h1>
                <h2 className='purchase-subtitle'>Subscribe to access premium features for your Discord server!</h2>
                <a className='purchase-button-wrapper' href={process.env.REACT_APP_DISCORD_PREMIUM_URL} target='_blank' rel='noreferrer'>
                    <button className='purchase-button'>Subscribe</button>
                </a>
            </div>

            <h4 className='premium-features-header'>Features</h4>

            <div className='features-list'>
                <FeatureBox 
                    title='Text Rooms'
                    desc='Create temporary text channels that pair up with your voice channels.'
                    image_src={Hashtag}
                    alt='Text icon'
                />

                <FeatureBox 
                    title='Keep Alive'
                    desc='Set a duration for your voice channels to remain before being deleted.'
                    image_src={Timer}
                    alt='Timer icon'
                />

                <FeatureBox 
                    title='Room Numbers'
                    desc='Put an incrementing number in your voice room name. Ex. Room 1, Room 2, etc.'
                    image_src={Lock}
                    alt='Lock icon'
                />

                <FeatureBox 
                    title='Activity Update'
                    desc='Have voice rooms automatically update their name to include member activity.'
                    image_src={Lock}
                    alt='Lock icon'
                />

                <FeatureBox 
                    title='More Halls'
                    desc='Have up to 10 halls in your server for even more customization.'
                    image_src={Lock}
                    alt='Lock icon'
                />

                <FeatureBox 
                    title='More to Come!'
                    desc='More features are planned for premium. Feel free to reach out in our support server for any suggestions!'
                    image_src={CheckWithArrows}
                    alt='Lock icon'
                />
            </div>


        </main>
    )
}

export default Premium;