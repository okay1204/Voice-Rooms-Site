import React from 'react'

import '../styles/home.css'
import InviteButton from '../components/inviteButton.js'

import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Voiceover from '../images/voiceover.png'
import Settings from '../images/settings.png'
import Customize from '../images/customize.png'
import Support from '../images/support.png'

import Demo from '../images/demo.gif'
const features = [
    {
        title: 'No pointless empty channels',
        desc: 'Create voice rooms only when users want to hang out, without the need of empty voice channels sitting around',
        image_src: Voiceover,
        alt: 'Voiceover icon'
    },
    {
        title: 'Breeze to set up',
        desc: 'Easy-to-follow tutorial that will get voice rooms up and running in no time.',
        image_src: Customize,
        alt: 'Customize icon'
    },
    {
        title: 'Fully customizable',
        desc: 'Adjust voice room names, give privileges to members, toggle whether bots are counted, and much more with every update!',
        image_src: Settings,
        alt: 'Settings icon'
    },
    {
        title: 'Support',
        desc: 'Dedicated support server for the bot, in case you need help, want to make a suggestion, or maybe just want to chat!',
        image_src: Support,
        alt: 'Support icon'
    }
]

function Home() {
    

    const [demoActive, setDemoActive] = React.useState(false)

    return (
        <div id='home-body' className='body'>
            <div className='banner-background'>
                <div className='banner animate__bounce '>
                    <h1 className='banner-title'>Voice Rooms</h1>
                    <h2 className='banner-subtext'>Join hundreds of users and tidy up your server with a new one-of-a-kind concept, voice rooms!</h2>
                    <InviteButton className='home-invite-button'/>
                </div>
            </div>

            <div className='features-list'>
                {features.map((feature) => {

                    let desc = feature.desc

                    const anchorText = 'support server'
                    if (desc.includes(anchorText)) {
                        desc = desc.split(anchorText)
                        desc = <h4 className='features-list-desc'>{desc[0]}<a href='https://discord.gg/HTMKMhC' target='_blank' rel='noreferrer'>{anchorText}</a>{desc[1]}</h4>
                    } else {
                        desc = <h4 className='features-list-desc'>{desc}</h4>
                    }

                    return (
                        <ScrollAnimation
                            className='features-section'
                            animateIn='animate__zoomIn animate__faster'
                        >
                            <div className='features-left'>
                                <img src={feature.image_src} alt={feature.alt}/>
                            </div>
                            <div className='features-right'>
                                <h3 className='features-list-title'>{feature.title}</h3>
                                <h4 className='features-list-desc'>{desc}</h4>
                            </div>
                        </ScrollAnimation>
                    )
                })}
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