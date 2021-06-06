import '../styles/navbar.css'
import Logo from '../images/logo.png'
import Help from '../images/help.png'
import RightArrow from '../images/right arrow.png'
import React from 'react'
import InviteButton from '../components/inviteButton.js'
import DiscordLogo from '../images/discord logo.png'
import LoadingWheel from '../images/loading wheel.gif'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import constants from '../constants'

const { discord_auth_url } = constants


const links = {
    Home: '/',
    Commands: '/commands',
    Premium: '/premium'
}

class NavBar extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props)
    
        this.state = {
            mobileMenu: false,
            discordMenu: false
        }
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

        let discord_element = null


        switch (this.props.discord_user) {
            case null:
                discord_element = <a className='discord-login' href={discord_auth_url(this.props.cookies.discord_prompt)}><img src={DiscordLogo} alt='Discord Login'/></a>
                break
            case undefined:
                discord_element = <div className='discord-loading'><img src={LoadingWheel} alt='Loading Wheel'/></div>
                break
            default:
                discord_element = <div className='discord-avatar' onClick={() => {this.setState({discordMenu: !this.state.discordMenu, mobileMenu: false})}}><img src={this.props.discord_user.avatar} alt={this.props.discord_user.username + '\'s avatar'}/></div>
                break
        }

        /* eslint-disable */
        return (
            <div className='navbar'>


                <div className='navbar-left'>
                    <a href='/'><img src={Logo} className='logo' alt='Logo'/></a>

                    {/* Mobile nav */}
                    <button className='mobile-navbar-arrow' onClick={() => {this.setState({mobileMenu: !this.state.mobileMenu, discordMenu: false})}}><img src={RightArrow} style={this.state.mobileMenu ? {transform: 'rotate(90deg)'} : {}}/></button>
                    <div className='mobile-nav-menu' style={this.state.mobileMenu ? {maxHeight: '300px'} : {}}>
                        {page_links}
                    </div>


                    <div className='navbar-pages'>
                        {page_links}
                    </div>
                </div>

                <div className='navbar-right'>
                    <InviteButton className='navbar-invite-button'/>
                    
                    {discord_element}

                    {
                        // Discord Menu
                        this.props.discord_user &&
                        <div className='discord-menu' style={this.state.discordMenu ? {maxHeight: '100px', padding: '20px'} : {}}>
                            <span className='discord-name'>{this.props.discord_user.username}#{this.props.discord_user.discriminator}</span>
                            <button className='discord-logout' onClick={() => {
                                const { cookies } = this.props;

                                if (cookies.get('discord_access_token')) {
                                    cookies.remove('discord_access_token')
                                }

                                cookies.set('discord_prompt', 'consent')

                                window.location.reload()
                            }}>
                                Log Out
                            </button>
                        </div>
                    }

                    <a className='help-button' href='/help'><img src={Help} alt='help'/></a>
                </div>
            </div>
        )
    }
}

export default withCookies(NavBar)