import React from 'react';
import './index.css';

const Projects = () => {
    const projects = [
        { name: 'Jobby App', description: 'A job search application', link: 'https://sasiproject030.ccbp.tech' },
        { name: 'NxtWatch', description: 'A video streaming platform', link: 'https://sasiproject035.ccbp.tech' },
        { name: 'Portfolio', description: 'A portfolio showcasing my projects', link: 'https://example.com/project3' },
    ];

    return (
        <div className='ProjectsCont' id='projects'>
            <h1>Projects</h1>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="projectCard">
                        <div className="projectContent">
                            <h3 className="projectName">{project.name}</h3>
                            <p className="projectDescription">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
