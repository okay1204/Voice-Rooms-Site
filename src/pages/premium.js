import { Helmet } from 'react-helmet';
import '../styles/premium.css'

function Premium() {

    return (
        <div id='premium-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Premium</title>
            </Helmet>

            <h1 className='premium-title'>Premium</h1>

            <p className='premium-desc'>
                Premium is on the way, with new big features planned!
                The price is going to be pretty cheap, most likely a one time payment of $5.
                And no, don't worry, no features from the existing free version will be restricted or taken away. New features only!
                <br /> <br />
                Be sure to check out this page once premium has released!
            </p>

        </div>
    )
}

export default Premium;