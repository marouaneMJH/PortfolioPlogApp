import React from "react";
import styled from "styled-components";
import { Link, Github } from "lucide-react";
import ProjectInterface from "../../interface/ProjectInterface";
import LinkButton from "../basic/LinkButton";

interface Props {
    project: ProjectInterface;
    titleMaxDisplay?: number;
    contentMaxDisplay?: number;
}

const Card = styled.div`
    width: 320px;
    height: 500px;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 220px;
    background-color: var(--bg-secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${Card}:hover & {
        transform: scale(1.05);
    }
`;

const ContentContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 220px);
`;

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--main-color);
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Description = styled.p`
    color: var(--selection-color);
    margin-bottom: 20px;
    flex-grow: 1;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
`;

const DemoButton = styled(LinkButton)`
    background-color: #007bff;
    color: white;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProjectCard: React.FC<Props> = ({
    project,
    titleMaxDisplay = 25,
    contentMaxDisplay = 120,
}) => {
    const truncateTitle = (title: string, maxLength: number) => {
        return title.length > maxLength
            ? `${title.slice(0, maxLength - 3)}...`
            : title;
    };

    const truncateDescription = (description: string, maxLength: number) => {
        return description.length > maxLength
            ? `${description.slice(0, maxLength - 3)}...`
            : description;
    };

    return (
        <Card>
            <ImageContainer>
                <ProjectImage
                    src={project.imagePath?.toString()}
                    alt={project.title}
                />
            </ImageContainer>

            <ContentContainer>
                <Title>{truncateTitle(project.title, titleMaxDisplay)}</Title>

                <Description>
                    {truncateDescription(
                        project.descreption,
                        contentMaxDisplay
                    )}
                </Description>

                <ButtonContainer>
                    {project.githubLink && (
                        <LinkButton
                            to={project.githubLink.toString()}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={18} style={{ marginRight: "8px" }} />
                            GitHub
                        </LinkButton>
                    )}

                    {project.demoLink && (
                        <DemoButton
                            to={project.demoLink.toString()}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link size={18} style={{ marginRight: "8px" }} />
                            Demo
                        </DemoButton>
                    )}
                </ButtonContainer>
            </ContentContainer>
        </Card>
    );
};

export default ProjectCard;
