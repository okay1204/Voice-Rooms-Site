import React from 'react'

import '../styles/home.css'
import InviteButton from '../components/inviteButton.js'
import FeatureBox from '../components/featureBox.js'

import Voiceover from '../images/voiceover.png'
import Settings from '../images/settings.png'
import Customize from '../images/customize.png'
import Support from '../images/support.png'

import Demo from '../images/demo.gif'

function Home() {
    

    const [demoActive, setDemoActive] = React.useState(false)

    return (
        <div id='home-body' className='body'>
            <div className='banner-background'>
                <div className='banner animate__bounce '>
                    <h1 className='banner-title'>Voice Rooms</h1>
                    <h2 className='banner-subtext'>Join thousands of users and tidy up your server with a new one-of-a-kind concept, voice rooms!</h2>
                    <InviteButton className='home-invite-button'/>
                </div>
            </div>

            <div className='features-list'>
                <FeatureBox
                    title='No pointless empty channels'
                    desc='Create voice rooms only when users want to hang out, without the need of empty voice channels sitting around.'
                    image_src={Voiceover}
                    alt='Voiceover icon'
                />

                <FeatureBox
                    title='Breeze to set up'
                    desc='Easy-to-follow tutorial that will get voice rooms up and running in no time.'
                    image_src={Customize}
                    alt='Customize icon'
                />

                <FeatureBox
                    title='Fully customizable'
                    desc='Adjust voice room names, give privileges to members, toggle whether bots are counted, and much more with every update.'
                    image_src={Settings}
                    alt='Settings icon'
                />

                <FeatureBox
                    title='Support'
                    desc='Dedicated support server for the bot, in case you need help, want to make a suggestion, or maybe just want to chat!'
                    image_src={Support}
                    alt='Support icon'
                />
            </div>

            <div className='demo-section'>
                <button className='demo-button' onClick={() => setDemoActive(!demoActive)}>See Demo</button>
                <br />
                <img className={`demo ${demoActive ? 'demo-active' : ''}`} src={Demo} alt='Voice rooms demo'/>
            </div>
        </div>
    )
}

export default Home;