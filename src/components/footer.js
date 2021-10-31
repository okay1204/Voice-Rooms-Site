import '../styles/footer.css'

import WordLogo from '../images/word logo.png'

function Footer() {
    return (
        <footer className='footer'>
            <a href="/">
                <img id="footer-logo" src={WordLogo} alt="Voice Rooms logo" />
            </a>
        </footer>
    )
}

export default Footer;