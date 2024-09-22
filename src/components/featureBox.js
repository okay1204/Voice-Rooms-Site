import '../styles/featureBox.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

function FeatureBox({title, desc, icon}) {

    const anchorText = 'support server'
    if (desc.includes(anchorText)) {
        desc = desc.split(anchorText)
        desc = <h4 className='features-list-desc'>{desc[0]}<a href='https://discord.gg/HTMKMhC' target='_blank' rel='noreferrer'>{anchorText}</a>{desc[1]}</h4>
    } else {
        desc = <h4 className='features-list-desc'>{desc}</h4>
    }

    return (
        <ScrollAnimation
            className='features-section'
            animateIn='animate__zoomIn animate__faster'
        >
            <div className='features-left'>
                <FontAwesomeIcon className='features-icon' icon={icon} />
            </div>
            <div className='features-right'>
                <h3 className='features-list-title'>{title}</h3>
                <h4 className='features-list-desc'>{desc}</h4>
            </div>
        </ScrollAnimation>
    )
}

export default FeatureBox