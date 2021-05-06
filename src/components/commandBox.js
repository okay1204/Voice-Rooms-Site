import '../styles/commandBox.css'

function CommandBox(props) {
    return (
        <div className={`command-box ${props.className ? props.className : ''}`}>
            <div className='command-name-wrapper'>
                <span className='command-prefix'>vc.</span><span className='command-name'>{props.name}</span>
            </div>
            <span className='command-desc'>
                {props.desc}
            </span>

        </div>
    )
}

export default CommandBox;