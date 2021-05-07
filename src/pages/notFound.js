import '../styles/notFound.css'
import { Helmet } from 'react-helmet'
import SpaceMan from '../images/spaceman.jpg'

function NotFound() {
    return(
        <div id="notfound-body" className='body'>

            <Helmet>
                <title>Voice Rooms • 404 Not Found</title>
            </Helmet>
            
            <div className='notfound-flex'>
                <div className='notfound-text-wrapper'>
                    <h1 className='notfound-title'>Houston, we have a problem!</h1>
                    <span className='notfound-desc'>We couldn't find the page you were looking for</span>
                </div>
                <div className='notfound-image-wrapper'>
                    <img className='notfound-image' src={SpaceMan} alt='Spaceman'/>
                </div>
            </div>
        </div>
    )
}

export default NotFound;