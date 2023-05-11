import React from 'react';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        stack: string[];
    };
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    const { title, description, stack } = project;

    return (
        <div className="project card my-3">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <div className="card-text">
                    <h4>Technology Stack:</h4>
                    <ul>
                        {stack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
