import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubSquare,
    faFacebook,
    faTwitter,
    faFacebookMessenger,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <section className='footer__section'>
            <div className="footer__container">

                <div className="footer__social">
                    <a href="https://www.facebook.com/dewey.craddock.7">
                        <FontAwesomeIcon icon={faFacebook} size='1x' />
                    </a>
                    <a href="http://m.me/dewey.craddock.7">
                        <FontAwesomeIcon icon={faFacebookMessenger} size='1x' />
                    </a>
                    <a href="https://www.instagram.com/deweyc3/">
                        <FontAwesomeIcon icon={faInstagram} size='1x' />
                    </a>
                    <a href="https://twitter.com/deweydc">
                        <FontAwesomeIcon icon={faTwitter} size='1x' />
                    </a>
                    <a href="https://github.com/deweydc">
                        <FontAwesomeIcon icon={faGithubSquare} size='1x' />
                    </a>
                </div>
                <span>© 2021 Dewey C.</span>
            </div>

        </section>
    )
}
