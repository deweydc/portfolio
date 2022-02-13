import React from 'react';
import './Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faHtml5,
    faCss3,
    faSass,
    faBootstrap
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section className='skills__section'>

            <div className="skills__icons">
                <FontAwesomeIcon className='faIcon' icon={faReact} size='6x' />
                <FontAwesomeIcon className='faIcon' icon={faJs} size='6x' />
                <FontAwesomeIcon className='faIcon' icon={faBootstrap} size='6x' />
                <FontAwesomeIcon className='faIcon' icon={faHtml5} size='6x' />
                <FontAwesomeIcon className='faIcon' icon={faCss3} size='6x' />
                <FontAwesomeIcon className='faIcon' icon={faSass} size='6x' />
            </div>

        </section>
    )
}

export default Skills
