import '../styles/commandBox.css'

function CommandBox(props) {
    return (
        <div className={`command-box ${props.className ? props.className : ''}`}>
            <span className='command-name'>{props.name}</span>
            <span className='command-desc'>{props.desc}</span>

        </div>
    )
}

export default CommandBox;