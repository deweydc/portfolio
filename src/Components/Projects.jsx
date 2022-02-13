import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem'
import { projectList } from '../Shared/ProjectList'

const Projects = () => {



    return (
        <section className='projects__section' id='Projects'>

            {
                projectList.map((project) => (
                    <div className="projects__container">
                        <ProjectItem
                            title={project.projectName}
                            image={project.img}
                            description={project.description}
                        />
                    </div>
                ))
            }

        </section>
    )
}

export default Projects
