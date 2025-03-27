import React from "react";
import ProjectInterface from "../../interface/ProjectInterface";
import Card from "../basic/Card";

interface Props {
    key: number;
    project: ProjectInterface;
}

const Project = (props: Props) => {
    return (
        <Card className="project">
            <h2>{props.project.title}</h2>
            <img
                src={props.project.imagePath.toString()}
                alt={props.project.title}
            />
            <p className="brief">{props.project.breafDescreption}</p>
            <p className="description">{props.project.descreption}</p>
            <a
                href={props.project.githubLink.toString()}
                target="_blank"
                rel="noopener noreferrer"
            >
                View on GitHub
            </a>
        </Card>
    );
};
export default Project;
