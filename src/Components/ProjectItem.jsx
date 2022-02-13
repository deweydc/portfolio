import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



function ProjectItem({ title, image, description }) {

    // const [width, setWidth] = useState('')
    const size = useWindowSize();

    // Hook
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    return (

        <div className="project">

            <div className="image__container">

                {/* <img className='img_mac' src={require("../Shared/images/mac.png").default} alt="" /> */}
                <img className='img' src={image} alt="" />

            </div>

            <div className="project__description">
                <div className="bg-container">
                    {
                        (size.width <= 1000) ?
                            <div className='mobile-project-container'>
                                <img src={image} alt="" />
                                <div className="project-content-container">
                                    <div className="project-content">
                                        <h1>
                                            {title}
                                        </h1>
                                        <p>{description}</p>
                                    </div>
                                    <a href="https://github.com/deweydc">
                                        <button className="project__button">
                                            <FontAwesomeIcon icon={faGithubSquare} size='1.5x' /> GitHub
                                        </button>
                                    </a>

                                </div>

                            </div> :

                            <div className="project-content">

                                <h1>
                                    {title}
                                </h1>
                                <p>{description}</p>

                                <a href="https://github.com/deweydc">
                                    <button className="project__button">
                                        <FontAwesomeIcon icon={faGithubSquare} size='1.5x' /> GitHub
                                    </button>
                                </a>

                            </div>
                    }

                </div>
            </div>

        </div >


    )
}

export default ProjectItem;