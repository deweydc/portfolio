import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav__section">
            <div className="nav__container container">



                {/* <img className='logo' src={require("../Shared/images/signature.png").default} alt="" /> */}

                <h3>Dewey Craddock</h3>

                <div className="nav-links__container">
                    <ul className='nav-links'>
                        <li className="nav-link">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-link">
                            <a href="#About">About</a>
                        </li>
                        <li className="nav-link">
                            <a href="#Projects">Projects</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
