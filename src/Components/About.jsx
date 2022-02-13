import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubSquare,
    faFacebook,
    faTwitter,
    faFacebookMessenger,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './About.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className='about__section' id='About'>

            <div className="about__container">
                <div className="about__title">
                    <h2>Hello, I'm Dewey 👋🏼 </h2>
                    <p>Web Developer in Houston</p>
                </div>

                <div className="about__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eius corrupti quis laborum unde perferendis temporibus pariatur. Delectus dignissimos laboriosam, magnam nemo nobis, labore, corporis est commodi maiores ducimus accusantium. Quod ipsum aliquam similique voluptatem dolorem omnis. Quo, eos? Maiores rerum delectus labore dicta quidem.
                    </p>

                    <div className="about__social">
                        <a href="https://www.facebook.com/dewey.craddock.7">
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                        </a>
                        <a href="http://m.me/dewey.craddock.7">
                            <FontAwesomeIcon icon={faFacebookMessenger} size='2x' />
                        </a>
                        <a href="https://www.instagram.com/deweyc3/">
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                        </a>
                        <a href="https://twitter.com/deweydc">
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </a>
                        <a href="https://github.com/deweydc">
                            <FontAwesomeIcon icon={faGithubSquare} size='2x' />
                        </a>
                    </div>


                    <div className="about__btn__container">
                        <button className='btn about__btn'>
                            <FontAwesomeIcon icon={faDownload} size='sm' color='white' /> My Resume
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
