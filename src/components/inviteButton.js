import '../styles/inviteButton.css'
import constants from '../constants.js'

const { invite_url } = constants;

function InviteButton(props) {

    return (
        <div className={`invite-button-wrapper ${props.className ? props.className : ''}`}>
            <a className='invite-button' href={invite_url} target='_blank' rel='noreferrer'>Invite</a>
            <span className='invite-button-backbox'><wbr/></span>
        </div>
    )
}

export default InviteButton;