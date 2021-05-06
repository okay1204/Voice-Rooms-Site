import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/commands.css'
import Search from '../images/search.png'

const commands = {
    'info': {
        'tutorial': 'Gives step by step instructions on how to set up the bot.',
        'help': 'Displays a listing of available commands.',
        'about': 'Displays general information about the bot.',
        'promo': 'Provides info on other creations that I\'ve made.',
        'invite': 'Gives an invite link to add the bot.',
        'news': 'Latest news on the bot whether it be updates, announcements, or tokens of gratitude!'
    },
    'settings': {
        'status': 'Checks if all channels and permissions are set up correctly. If all three have a check mark, you\'re good to go.',
        'create channel/category': 'Creates a voice channel to create rooms, or a category to put rooms in.',
        'giveperms on/off': 'Toggles whether or not room owners should have manage channel permissions on their room or not.',
        'ignorebots on/off': 'Toggles whethere or not bots will be ignored when deciding to delete voice rooms.',
        'defaultname name': 'Sets the default name of a room when it is created. If you put {name} in the room name, it will be replaced with the member\'s name.'
    },
    'premium': {
        'e': 'e'
    }
}

const all_commands = {}
Object.values(commands).forEach((commands_group) => {
    for (const [key, value] of Object.entries(commands_group)) {
        all_commands[key] = value
    }
})

function Commands(props) {

    const [current_category, setCategory] = React.useState(Object.keys(commands)[0])
    const [search, setSearch] = React.useState('')
    const [search_results, setSearchResults] = React.useState([])

    const command_elements = []
    for (const [key, value] of Object.entries(commands[current_category])) {
        command_elements.push(
            <div className='command-box'>
                <div className='command-name-wrapper'>
                    <span className='command-prefix'>vc.</span><span className='command-name'>{key}</span>
                </div>
                <span className='command-desc'>
                    {value}
                </span>

            </div>
        )
    }

    return (
        <div id='commands-body' className='body'>

            <Helmet>
                <title>Voice Rooms • Commands</title>
            </Helmet>

            <h1 className='commands-title'>Commands</h1>

            <div className='commands-category-container'>
                {Object.keys(commands).map((category) => (
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

                <div className='commands-search-wrapper'>
                    <img className='commands-search-icon' src={Search} alt='search-icon'/>
                    <input className='commands-search' placeholder='Search for a command...' onChange={(e) => {
                        setSearch(e.target.value)
                        
                        // getting results with search query in it
                        const filtered = Object.keys(all_commands).filter((command) => command.includes(search))
                        // sort it by character length
                        filtered.sort((a, b) => a.length - b.length)

                        
                    }} value={search}/>
                </div>
            </div>

            <hr className='commands-divider'/>

            <div className='commands-list'>
                {search ? search_results : command_elements}
            </div>

        </div>
    )
}

export default Commands;