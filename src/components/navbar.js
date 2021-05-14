import '../styles/navbar.css'
import Logo from '../images/logo.png'
import Help from '../images/help.png'
import RightArrow from '../images/right arrow.png'
import React from 'react'
import InviteButton from '../components/inviteButton.js'
import DiscordLogo from '../images/discord logo.png'

const links = {
    Home: '/',
    Commands: '/commands',
    Premium: '/premium'
}

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            mobileMenu: false
        }

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    }

    checkMobileMenu = () => {
        if (window.innerWidth > 700 && this.state.mobileMenu) {
            this.setState({mobileMenu: false})
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.checkMobileMenu);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkMobileMenu);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu})
    }

    render() {

        const page_links = []

        for (const [key, value] of Object.entries(links)) {

            page_links.push(
                <a href={value}
                className={`navbar-page ${value === `/${window.location.pathname.split('/')[1]}` ? 'active' : ''}`}>
                    {key}
                </a>
            )
        }

        /* eslint-disable */
        return (
            <div className='navbar'>


                <div className='navbar-left'>
                    <a href='/'><img src={Logo} className='logo' alt='Logo'/></a>

                    {/* Mobile nav */}
                    <button className='mobile-navbar-arrow' onClick={this.toggleMobileMenu}><img src={RightArrow} style={this.state.mobileMenu ? {transform: 'rotate(90deg)'} : {}}/></button>
                    <div className='mobile-nav-menu' style={this.state.mobileMenu ? {maxHeight: '300px'} : {}}>
                        {page_links}
                    </div>


                    <div className='navbar-pages'>
                        {page_links}
                    </div>
                </div>

                <div className='navbar-right'>
                    <InviteButton className='navbar-invite-button'/>
                    <a className='discord-login'><img src={DiscordLogo} /></a>
                    <a className='help-button' href='/help'><img src={Help} alt='help'/></a>
                </div>
            </div>
        )
    }
}

export default NavBar