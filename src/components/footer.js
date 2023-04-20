import '../styles/footer.css'

import WordLogo from '../images/word logo.png'
import DigitalOcean from './digitalOcean.js';
import PayPal from './payPal.js';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <a className='footer-logo-anchor' href="/">
                    <img id="footer-logo" src={WordLogo} alt="Voice Rooms logo" />
                </a>
                <div className='footer-legal-links'>
                    <a href='/terms-of-service'>Terms of Service</a>
                    <a href='/privacy-policy'>Privacy Policy</a>
                </div>
            </div>

            <div className='footer-promos'>
                <DigitalOcean />
                <PayPal />
            </div>
        </footer>
    )
}

export default Footer;