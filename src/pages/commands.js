import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/commands.css'
import Search from '../images/search.png'
import CommandBox from '../components/commandBox.js'

const COMMANDS = {
    'info': {
        'tutorial': 'Gives step by step instructions on how to set up the bot.',
        'help': 'Displays a listing of available commands.',
        'about': 'Displays general information about the bot.',
        'promo': 'Provides info on other creations that I\'ve made.',
        'invite': 'Gives an invite link to add the bot.',
        'news': 'Latest news on the bot whether it be updates, announcements, or tokens of gratitude.',
        'website': 'Sends a link to Voice Room\'s website.'
    },
    'settings': {
        'status': 'Checks if all channels and permissions are set up correctly. If all three have a check mark, you\'re good to go.',
        'create channel/category': 'Creates a voice channel to create rooms, or a category to put rooms in.',
        'giveperms on/off': 'Toggles whether or not room owners should have manage channel permissions on their room or not.',
        'ignorebots on/off': 'Toggles whethere or not bots will be ignored when deciding to delete voice rooms.',
        'defaultname name': "Sets the default name of a room when it is created. Any occurrence of {name} and {nick} will be replaced with the member's username or server nickname, respectively.",
        'userlimit newlimit': 'Sets default user limit of created voice rooms.',
        '💎 create textcategory': 'Creates another category where text channels for voice rooms are created.',
        '💎 keepalive 0m 0s': 'Sets the duration that channels will live after all members have left before deleting.',
        '💎 restrictedroles add/remove role': 'Adds or removes roles from the list of restricted roles that cannot create voice rooms.',
        '💎 restrictedroles list': 'Lists all restricted roles.'
    },
    'premium': {
        'premium check': 'Checks if the server has premium or not.',
        'premium credits': 'Checks how many premium credits you own.',
        'premium grant': 'Uses a premium credit to boost the server to premium! Does not consume your credit.',
        'premium revoke': 'Revokes premium from the server and frees up a credit that you own.',
        'premium purchase': 'Gives a link where you can purchase premium credits.'
    }
}

const all_commands = {}
Object.values(COMMANDS).forEach((commands_group) => {
    for (const [key, value] of Object.entries(commands_group)) {
        all_commands[key] = value
    }
})

function Commands(props) {

    const [current_category, setCategory] = React.useState(Object.keys(COMMANDS)[0])
    const [search, setSearch] = React.useState('')
    const [search_results, setSearchResults] = React.useState([])

    const command_elements = []
    for (const [key, value] of Object.entries(COMMANDS[current_category])) {
        command_elements.push(
            <CommandBox name={key} desc={value}/>
        )
    }

    return (
        <main id='commands-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Commands</title>
            </Helmet>

            <h1 className='commands-title'>Commands</h1>
            <span className='commands-prefix-title'>Now uses Slash Commands</span>

            <div className='commands-category-container'>

                {/* normal buttons */}
                {Object.keys(COMMANDS).map((category) => (
                    <button
                        className={`commands-category ${category === current_category && !search ? 'commands-category-active' : ''}`}
                        onClick={() => {
                            setCategory(category)
                            setSearch('')
                        }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}

                {/* mobile selector */}
                <div className='commands-category-dropdown-wrapper'>
                    <select className='commands-category-dropdown' name = 'options' value={current_category} onChange = {(e) => {
                        setCategory(e.target.value)
                        setSearch('')
                    }}>
                        {Object.keys(COMMANDS).map(
                            (name) => (<option value = {name}>{name.charAt(0).toUpperCase() + name.slice(1)}</option>)
                        )}
                    </select>
                </div>

                <div className='commands-search-wrapper'>
                    <img className='commands-search-icon' src={Search} alt='search-icon'/>
                    <input className='commands-search' placeholder='Search for a command...' onChange={(e) => {
                        const search = e.target.value
                        setSearch(search)
                        
                        // getting results with search query in it
                        const filtered = Object.keys(all_commands).filter((command) => command.includes(search))
                        // sort it by character length
                        filtered.sort((a, b) => a.length - b.length)

                        setSearchResults(filtered.map((name) => (
                            <CommandBox name={name} desc={all_commands[name]}/>
                        )))

                    }} value={search}/>
                </div>
            </div>

            <hr className='commands-divider'/>

            <div className='commands-list'>
                {search ? search_results : command_elements}
            </div>

        </main>
    )
}

export default Commands;