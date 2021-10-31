import { Helmet } from 'react-helmet';
import '../styles/thanks.css'
import DancingKid from '../images/dancing kid.gif'
import qs from 'qs'

function Thanks(props) {

    const order_id = qs.parse(props.location.search, { ignoreQueryPrefix: true }).order_id

    return (
        <main id='premium-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Thank you</title>
            </Helmet>

            <h1 className='thanks-title'>Thank You</h1>

            <span className='thanks-desc'>
                Thank you for your purchase! You should recieve your premium credits soon, please allow a few minutes for your order to process.
                If you haven't recieved your credit within an hour, be sure to contact us at our <a href='https://discord.gg/HTMKMhC' target='_blank' rel='noreferrer'>support server</a>!
            </span>

            {order_id && <span className='thanks-order-id'>Order ID:<br />{order_id}</span>}

            <div className='thanks-dancing-kid-wrapper'>
                <img className='thanks-dancing-kid' src={DancingKid} alt='Dancing kid'/>
            </div>

        </main>
    )
}

export default Thanks;