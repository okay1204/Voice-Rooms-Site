import { faComment, faGamepad, faHashtag, faPlus, faStopwatch, faTimeline } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Helmet } from 'react-helmet'
import FeatureBox from '../components/featureBox.js'
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

            <div className='features-list premium-features-list'>
                <FeatureBox 
                    title='Text Rooms'
                    desc='Create temporary text channels that pair up with your voice channels.'
                    icon={faComment}
                />

                <FeatureBox 
                    title='Keep Alive'
                    desc='Set a duration for your voice channels to remain before being deleted.'
                    icon={faStopwatch}
                />

                <FeatureBox 
                    title='Room Numbers'
                    desc='Put an incrementing number in your voice room name. Ex. Room 1, Room 2, etc.'
                    icon={faHashtag}
                />

                <FeatureBox 
                    title='Activity Update'
                    desc='Have voice rooms automatically update their name to include member activity.'
                    icon={faGamepad}
                />

                <FeatureBox 
                    title='More Halls'
                    desc='Have up to 10 halls in your server for even more customization.'
                    icon={faPlus}
                />

                <FeatureBox 
                    title='More to Come!'
                    desc='More features are planned for premium. Feel free to reach out in our support server for any suggestions!'
                    icon={faTimeline}
                />
            </div>


        </main>
    )
}

export default Premium;