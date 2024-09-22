import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/commands.css'
import Search from '../images/search.png'
import CommandBox from '../components/commandBox.js'

const COMMANDS = {
    'info': {
        'help': 'Displays a setup tutorial, and a list of commands with their descriptions.',
        'news': 'Latest news from the Voice Rooms developer',
        'about': 'Learn more about the bot and its features.',
        'promo': 'Learn more about the developer behind Voice Rooms.',
        'website': 'Provides a link to Voice Room\'s website.',
        'invite': 'Provides an invite link to add the bot.',
        'support': 'Provides an invite link to the Voice Room support server.'
    },
    'settings': {
        'create channel': 'Creates a voice channel for creating new voice rooms within a hall.',
        'create category': 'Creates a category to put voice rooms in for a hall.',
        '💎 create textcategory': 'Creates a category to put voice rooms in.',
        'halls status': 'Checks if a hall is set up correctly.',
        'halls create': "Creates a new hall.",
        'halls delete': 'Deletes a hall.',
        'halls rename': 'Renames a hall.',
        'halls list': 'Lists all halls.',
        'halls settings': 'View and adjust hall settings.',
    },
    'premium': {
        'premium check': 'Checks if this server has premium.',
        'premium purchase': 'Provides a button to purchase premium.'
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