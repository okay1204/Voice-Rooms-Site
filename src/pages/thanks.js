import { Helmet } from 'react-helmet';
import '../styles/thanks.css'
import DancingKid from '../images/dancing kid.gif'

function Thanks() {

    return (
        <div id='premium-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Thank you</title>
            </Helmet>

            <h1 className='thanks-title'>Thank You</h1>

            <span className='thanks-desc'>
                Thank you for your purchase! You should recieve your premium credit soon, please allow a few minutes for your order to process.
                If you haven't recieved your credit within an hour, be sure to contact us at our <a href='https://discord.gg/HTMKMhC' target='_blank' rel='noreferrer'>support server</a>!
            </span>

            <div className='thanks-dancing-kid-wrapper'>
                <img className='thanks-dancing-kid' src={DancingKid} alt='Dancing kid'/>
            </div>

        </div>
    )
}

export default Thanks;